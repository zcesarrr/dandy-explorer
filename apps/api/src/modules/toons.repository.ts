import type { Pool } from "pg";

class ToonsRepository {
    private readonly pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async findAll() {
        const result = await this.pool.query
    }
}
