import e from "express";
import helmet from "helmet";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const app = e();
app.use(helmet());
app.disable("x-powered-by");

app.get("/", (_, res) => {
    res.status(200).json({
        ok: true,
    });
});

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => {
    console.log(`http://localhost:${3000}`);
});
