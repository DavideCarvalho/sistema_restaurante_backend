const app = require('./configuration/initialization.js');
//TODO: chamar o arquivo de conexão com a base de dados
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
