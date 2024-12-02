const http = require("node:http");
const fs = require("node:fs");

// vamos a extraer el contenido de un archivo y mostrarlo en el servido

const server = http.createServer((req, res) => {
  const DATA_FILE = fs.readFileSync("archivo.txt", "utf-8");
  res.end(`La variable hola te quiere decir algo ${DATA_FILE}`);
});

const PORT = 0; // Al no especificarle ningún puerto lo que hara nodejs, será tomar un puerto libre
// Podremos acceder a su valor, desde las propiedades que tiene el propio servidor -> server.address().port

server.listen(PORT, () => {
  console.log(`Hemos levandatado el servidor en el puerto http://localhost:${server.address().port}`);
});
