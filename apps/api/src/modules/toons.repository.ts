import type { Ability, Quest, Requirement, Toon, ToonDetail } from "@dandy-explorer/shared";
import type { Pool } from "pg";

export class ToonsRepository {
    private readonly pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async findAll(): Promise<Toon[]> {
        const result = await this.pool.query("SELECT * FROM toons");

        return result.rows;
    }

    async find(id: number): Promise<ToonDetail | undefined> {
        const result = await this.pool.query(`
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

    async findAbilities(toonId: number): Promise<Ability[]> {
        const result = await this.pool.query("SELECT * FROM abilities WHERE toon_id = $1", [toonId]);
        return result.rows;
    }

    async findQuests(toonId: number): Promise<Quest[]> {
        const result = await this.pool.query("SELECT * FROM quests WHERE toon_id = $1", [toonId]);
        return result.rows;
    }

    async findRequirements(toonId: number): Promise<Requirement[]> {
        const result = await this.pool.query("SELECT * FROM requirements WHERE toon_id = $1", [toonId]);
        return result.rows;
    }
}
