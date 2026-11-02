import type { ToonDetailed } from "@dandy-explorer/shared";
import type { Pool } from "pg";

export class ToonsRepository {
    private readonly pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async findAllDetailed(): Promise<ToonDetailed[]> {
        const result = await this.pool.query<ToonDetailed>(`
            SELECT 
                t.*, 
                COALESCE((
                    SELECT json_agg(s) FROM stats s WHERE s.toon_id = t.id
                ), '[]') AS stats,
                COALESCE((
                    SELECT json_agg(a) FROM abilities a WHERE a.toon_id = t.id
                ), '[]') AS abilities,
                COALESCE((
                    SELECT json_agg(q) FROM quests q WHERE q.toon_id = t.id
                ), '[]') AS quests,
                COALESCE((
                    SELECT json_agg(r) FROM requirements r WHERE r.toon_id = t.id
                ), '[]') AS requirements
            FROM toons t;
        `);

        return result.rows;
    }
}
