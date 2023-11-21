// aqui vamos a comenzar con javascript
// Solicitar la base y altura del triángulo al usuario
let baseTriangulo = parseFloat(prompt("Ingrese la base del triángulo:"));
let alturaTriangulo = parseFloat(prompt("Ingrese la altura del triángulo:"));

// Solicitar el radio del círculo al usuario
let radioCirculo = parseFloat(prompt("Ingrese el radio del círculo:"));

// Calcular el área del triángulo y del círculo
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
let areaCirculo = Math.PI * Math.pow(radioCirculo, 2);

// Mostrar los resultados en la consola
console.log("El área del triángulo con base", baseTriangulo , "y altura" , alturaTriangulo , " es: ", areaTriangulo);
console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo}`);

// Mostrar los resultados en pantalla
document.write(`<p>El área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${areaTriangulo}</p>`);
document.write(`<p>El área del círculo con radio ${radioCirculo} es: ${areaCirculo}</p>`);
