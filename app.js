const app = require('./configuration/initialization.js');
const { DATABASE_URL, PORT } = require('./configuration/system_variables.js');
require('./configuration/database')(DATABASE_URL);
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
