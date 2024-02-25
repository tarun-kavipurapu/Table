import express, { Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors());
import tableRoutes from "./routes/table.routes";

app.use("/api/v1/tables/", tableRoutes);

export default app;
