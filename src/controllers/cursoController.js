import * as cursoService from "../services/cursoService.js";

export async function criar(req, res) {
    try {
        const curso = await cursoService.criarCurso(req.body);
        res.status(201).json(curso);
    } catch (error) {
        const status = erro.status || 500;
        res.status(status).json({ erro: error.message || "Erro interno do servidor" });
    }
}