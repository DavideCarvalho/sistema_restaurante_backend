const mongoose = require('mongoose');

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  quantidade: {
    type: String,
    required: true
  },
});

mongoose.model('Produto', schema);
