// Complejidad del archivo: Tiempo O(1) | Espacio O(1)

// a. Enum y tipos basicos
enum CategoriProducto {
    Herramienta = "Herramienta",
    Material = "Material",
    Electrico = "Electrico",
    Plomeria = "Plomeria"
}

// Variables basicas
let codigoProducto: number = 1001;
let nombreProducto: string = "Martillo Truper";
let enStock: boolean = true;
let precioUnitario: number = 249.99;
let categoria: CategoriProducto = CategoriProducto.Herramienta;

console.log("--- Variables Basicas ---");
console.log({
    codigoProducto,
    nombreProducto,
    enStock,
    precioUnitario,
    categoria
});

// b. Tupla de registro
type RegistroProducto = [number, string, CategoriProducto, number, boolean];

const producto1: RegistroProducto = [
    2005,
    "Tubo Galvanizado 1/2 pulgada",
    CategoriProducto.Plomeria,
    185.50,
    true
];

// Desestructuracion para extraer nombre y precio
const [, nombre, , precio] = producto1;

console.log("\n--- Registro del Producto ---");
console.log(`Producto: ${nombre}`);
console.log(`Precio: L. ${precio.toFixed(2)}`);
