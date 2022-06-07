import { con } from "./connection.js";

export async function inserirVilao(vilao){
    const comando = 
    `INSERT INTO tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
                 VALUES (?, ?, ?)`;

    const[resposta] = await con.query(comando, [vilao,vilao.nome,vilao.maldades,vilao.super_poder]);
    vilao.id = resposta.insertId;

    return resposta.affectedRows;
}

export async function listarTodosViloes(){
    const comando =
    `SELECT id_vilao		id,
            nm_vilao		nome,
            ds_maldades     maldades
            bt_super_poder	true,
       FROM tb_vilao`;

    const[linhas] = await con.query(comando);
    return linhas;
    
}