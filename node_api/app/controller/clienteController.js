const Cliente = require("../model/cliente");

class clienteController {
  
  //Cria novo registro  
  async store(req, res) {
    const data = await Cliente.create(req.body);

    return res.json(data);
  }

  //Busca novo registro
  async index(req, res) {
    
    const data = await Cliente.find({});
    return res.json(data);
  }
}

module.exports = new clienteController();