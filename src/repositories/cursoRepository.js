import db from "../config/database.js";

export function inserirCurso(curso) {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO curso (nome, area, nivel, modalidade) VALUES (?, ?, ?, ?)";

    db.run(
      sql,
      [curso.nome, curso.area, curso.nivel, curso.modalidade] ,
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id_curso: this.lastID,
            ... curso 
          });
         }
        }
    );
  })
}
