const express = require('express')
const rutas = require('./rutas/rutas.js'); //import rutas from "./rutas/rutas.js";

const app = express();
const port = process.env.PORT || 3004;

// uso de middleware
app.use("/", rutas);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});