const express = require("express");
const app = express();
const path = require("path");
const PORT = 3005;

app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.listen(PORT, () => console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
`))




