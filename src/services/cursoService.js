import { cursoRepository } from "../repositories/cursoRepository.js";

export async function criarCursoService (dadosCurso) {
    const { nome, area, nivel, modalidade } = dados;

    if(!nome || !area || !nivel || !modalidade) {
        throw {status: 400, message: "Preencha Todos os campos "};

    }

    const id = await cursoRepository.inserirCurso({ nome, area, nivel, modalidade });
    
    return { id_curso: id, nome, area, nivel, modalidade };
}

