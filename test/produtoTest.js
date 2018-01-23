require('dotenv').config();
const { Mongoose } = require('mongoose');
const mongoose = new Mongoose();
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const systemVariables = require('../configuration/system_variables');

mockgoose.prepareStorage().then(function() {
	mongoose.connect(systemVariables.DATABASE_URL);
});
const db = mongoose.connection;
db.model('Produto', {
  nome: {
    type: String,
    required: true
  },
  quantidade: {
    type: String,
    required: true
  },
});

describe('Produto Model', () => {
	it('should add one person', async (done) => {
		const produtoModel = db.Model('Produto')
		console.log('produtoModel', produtoModel);
		const produto = await produto.create({
			nome: 'Peixe',
			quantidade: '10'
		})
		assert(produto,{
			nome: 'Peixe',
			quantidade: '10'
		})
	});
});