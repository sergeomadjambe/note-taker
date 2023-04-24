const express = require("express");
const api = require('./api-router');
const html = require('./page-routes.js');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);



app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

module.exports = app;