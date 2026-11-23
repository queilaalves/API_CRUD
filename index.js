import express from "express";
import cursoRouster from "./routes/cursoRoutes.js";

const app = express();

app.use(express.json());
app.use(cursoRoutes);

app.listen(3000, () => {
  console.log("API rodando http://localhost:3000");
});