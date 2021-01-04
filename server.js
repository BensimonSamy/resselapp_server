// GET ENV VARIABLE
require('dotenv').config({ path: __dirname + '/.env' });

// EXPRESS SET UP
const app = require('./init_config/express')();

// MONGO DB SET UP CONNNECTION
require('./init_config/mongo')();

// SET UP ROUTES
require('./routes')(app);