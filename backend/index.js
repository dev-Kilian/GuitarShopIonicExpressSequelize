const express = require("express");
const cors = require("cors");

//UT3 (Multer):
var path = require('path');

const app = express();

//UT3 (Multer):
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./models");

db.sequelize.sync({}).then(() => { // en vez de force: true si se pone alter: true se evita el borrado de datos
    console.log("Re-sync db.");
})

app.get("/", (req, res) => {
    res.json({message: "Welcome to the Guitar Shop application."});
});

require("./routes/guitar.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});