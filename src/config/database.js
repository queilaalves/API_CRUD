import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./data/database.sqlite", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados", err.messaage);
  } else {
    console.log("Connected to SQLite3 database");
  }
});
db.run(`CREATE TABLE IF NOT EXISTS curso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    area TEXT NOT NULL,
    nivel TEXT NOT NULL,
    modalidade TEXT NOT NULL 
 )`, 
 (err) => {
         if (err) {
              console.error('Erro ao criar tabela:', err.message);

         }
     }
    );

export default db;
