const db = require('../db');


module.exports = {
    nome: () =>{
        return new Promise((aceito, rejeitado)=> {
            if(error) { rejeitado(error); return; }
            aceito(results);
        })
    }
};