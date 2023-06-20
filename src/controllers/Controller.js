const Service = require('C:\\Users\\cebru\\OneDrive\\Documents\\ProjetoFaculdade\\src\\controllers\\Controller.js');

module.exports = {
    nome: async (req, res)=>{
        let json = {error:'', result: []};
        let nome = await Service.nome();
        for (let i in nome){
            json.result.push({
                codigo: nome[i].codigo,
                descricao: nome[i].nome
            });
        }
        res.json(json);
    }
}