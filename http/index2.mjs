import { createServer } from "node:http";
import { readFile } from "node:fs";
import { neon } from "@neondatabase/serverless";


const server = createServer(async (req, res) => {
  console.log(`Acabo de recibir una petición, a la ruta ${req.url}`);
  
  const URL = req.url;

  switch (URL) {
    case "/":
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end("<h1>¡Bienvenido al servidor!</h1><p>Veo que has querido acceder a la raíz de este servidor</p>");
      break;

    case "/banana":
      readFile("./banana.png", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end("Error al leer el archivo banana.png");
        } else {
          res.setHeader('Content-Type', 'image/png');
          res.end(data); // Enviar la imagen correctamente
        }
      });
      break;

    case "/get":
      try {
        const sql = neon(
          "postgresql://Programs-db_owner:gt7QxJLNI4rP@ep-shrill-brook-a5j8odhx.us-east-2.aws.neon.tech/Programs-db?sslmode=require"
        );

        // Obtener datos de la base de datos
        const result = await sql`SELECT * FROM programas`;

        // Configurar la respuesta
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(result));
      } catch (error) {
        console.error("Error al consultar la base de datos:", error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end("Error al obtener los datos de la base de datos.");
      }
      break;

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end("<h1>404 - No encontrado</h1>");
      break;
  }
});

// Función que se ejecutará cuando el servidor se levante por un puerto de escucha
const PORT = 4321;

server.listen(PORT, () => {
  console.log(`Se ha inicializado el servidor en el puerto http://localhost:${PORT}`);
});
