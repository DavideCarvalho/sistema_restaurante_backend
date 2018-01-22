require('dotenv').load();
const app = require('./configuration/initialization.js');
const { databaseUrl } = require('./configuration/system_variables.js');
require('./configuration/database')(databaseUrl);
//TODO: chamar o arquivo de conexão com a base de dados
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
