import e from "express";
import helmet from "helmet";
import type { Express } from "express";

const app: Express = e();
app.use(helmet());
app.disable("x-powered-by");

app.get("/", (_, res) => {
    res.status(200).json({
        ok: true,
    });
});

app.listen(3000, () => {
    console.log(`http://localhost:${3000}`);
});
