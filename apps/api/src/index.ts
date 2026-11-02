import env from "./config/env.js";
import e from "express";
import helmet from "helmet";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

import toonsRoutes from "./modules/toons.routes.js";

const app = e();
app.use(helmet());
app.disable("x-powered-by");


app.get("/", (_, res) => {
    res.status(200).json({
        ok: true,
    });
});

app.use("/toons", toonsRoutes);


app.use(notFoundHandler);
app.use(errorHandler);

app.listen(env.PORT, () => {
    console.log(`http://localhost:${env.PORT}`);
});
