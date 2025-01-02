var express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const DataLevelsRoute = require("./src/routes/DataLevelsRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api", DataLevelsRoute);

// Conexión a MongoDB Atlas
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB Atlas:", err));

// Rutas
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
