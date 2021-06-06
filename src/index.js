const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./controllers/authController')(app);
require('./controllers/favoriteController')(app);
require('./controllers/favoriteCharactersController')(app);

app.listen(3001);