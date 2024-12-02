function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));

console.log("\n \n \n Empezamos a leer nuestros archivos 🥰");

import { readFileSync } from "node:fs";

console.log(readFileSync("archivo 1.txt"));
console.log("\n Me ejecto obligatoriamente después de leer el primer archivo");

console.log("\n \n");
console.log(readFileSync("archivo 2.txt"));
console.log("\n Me ejecto obligatoriamente después de leer el segundo archivo");

console.log("\n \n");
console.log("Estamos empezando a leer los archivos de manera asíncrona");

import { readFile } from "node:fs";

console.log(readFile('archivo 1.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`Termine de leer el archivo, aquí lo tienes: ${data}`)

}))
console.log("Haciendo cosas mientras se lee el primer archivo de manera asíncrona")
console.log(readFile('archivo 2.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`Termine de leer el archivo 2, aquí lo tienes: ${data}`)

}))

console.log("Haciendo cosas mientras se lee el segundo archivo de manera asíncrona")