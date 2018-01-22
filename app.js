const app = require('./configuration/initialization.js');
require('./configuration/database')('mongodb://192.168.99.100:27017');
//TODO: chamar o arquivo de conexão com a base de dados
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
