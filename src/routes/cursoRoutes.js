import express from "express";

const cursoRoutes = express.Router();

cursoRoutes.get("/", (req, res) => {
    res.json({
        message: "API de cursos funcionando!"
    });
});

export default cursoRoutes;