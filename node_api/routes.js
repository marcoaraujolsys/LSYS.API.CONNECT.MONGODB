
const express = require("express");

const routes = express.Router();
const HamburgerController = require("./app/controller/clienteController");

routes.get("/cliente", HamburgerController.index);

routes.post("/cliente", HamburgerController.store);

module.exports = routes;