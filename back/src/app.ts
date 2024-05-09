import cors from "cors";
import express from "express";
import "express-async-errors";

import { errorHandlerMiddleware } from "./middlewares/errorMiddleware.js";
import router from "./routers/index.js";
import path from "path";

const __dirname = path.resolve();
export const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use('/profileImage', express.static(__dirname + '/src/public'));
app.use(errorHandlerMiddleware);

export default app;