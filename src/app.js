import express from "express";
import bodyParser from "body-parser";
import submitRoutes from "./routes/submitRoutes.js";

import metricsRoutes from "./routes/metricsRoutes.js";

const app = express();

app.use(bodyParser.json());

// Routes

app.use("/api/submit", submitRoutes);
app.use("/api/metrics", metricsRoutes);


export default app;