import type { Toon, ToonDetail } from "@dandy-explorer/shared";
import type { Pool } from "pg";

export class ToonsRepository {
    private readonly pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async findAll(): Promise<Toon[]> {
        const result = await this.pool.query<Toon>("SELECT * FROM toons");

        return result.rows;
    }

    async find(id: number): Promise<ToonDetail | undefined> {
        const result = await this.pool.query<ToonDetail>(`
            SELECT
                t.*,
                COALESCE((
                    SELECT json_agg(s ORDER BY s.index ASC) FROM stats s WHERE s.toon_id = $1
                ), '[]') AS stats
            FROM toons t
            WHERE t.id = $1;
        `, [id]);

        return result.rows[0];
    }
}
