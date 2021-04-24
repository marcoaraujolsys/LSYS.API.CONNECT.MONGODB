const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    valor: {
      type: Number,
      required: true
    },
    data: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("cliente", ClienteSchema);