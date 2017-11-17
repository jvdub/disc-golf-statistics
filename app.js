const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');

app.use(favicon(__dirname + '/favicon.ico'));
app.use('/material', express.static(__dirname + '/node_modules/materialize-css/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/src/js/'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/src/index.html')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));