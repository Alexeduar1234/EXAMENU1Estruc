interface Venta {
    id: number;
    producto: string;
    monto: number;
    categoria: string;
    pagado: boolean;
}

const ventas: Venta[] = [
    { id: 1, producto: "Martillo", monto: 120.00, categoria: "Herramienta", pagado: true },
    { id: 2, producto: "Cable 10m", monto: 85.50, categoria: "Electrico", pagado: false },
    { id: 3, producto: "Llave inglesa", monto: 95.00, categoria: "Herramienta", pagado: true },
    { id: 4, producto: "Tubo PVC 1/2", monto: 32.00, categoria: "Plomeria", pagado: true },
    { id: 5, producto: "Taladro", monto: 450.00, categoria: "Electrico", pagado: false },
    { id: 6, producto: "Cemento 50kg", monto: 210.00, categoria: "Material", pagado: true },
    { id: 7, producto: "Sierra circular", monto: 380.00, categoria: "Herramienta", pagado: true },
    { id: 8, producto: "Cinta métrica", monto: 55.00, categoria: "Herramienta", pagado: false },
];

console.log("--- Procesamiento con Métodos de Arreglos ---");

// filter — Obtiene un arreglo ventasPagadas - O(n)
const ventasPagadas = ventas.filter(venta => venta.pagado === true);
console.log("Ventas Pagadas (filter):", ventasPagadas);


// map — Crea un arreglo nombresProductos - O(n)
const nombresProductos: string[] = ventas.map(venta => venta.producto);
console.log("\nNombres de Productos (map):", nombresProductos);


// reduce - O(n)
const totalVentas: number = ventas.reduce((acumulado, venta) => acumulado + venta.monto, 0);
console.log(`\nTotal de Montos de Ventas (reduce): L. ${totalVentas.toFixed(2)}`);


// Encadenado - O(n)
const totalHerramientas: number = ventas
    .filter(venta => venta.categoria === "Herramienta")
    .reduce((acumulado, venta) => acumulado + venta.monto, 0);
console.log(`\nTotal de Ventas de Herramientas (filter + reduce): L. ${totalHerramientas.toFixed(2)}`);


console.log("\n--- Ordenamiento (sort) ---");

// Ordena el arreglo ventas por monto de mayor a menor con sort.
const ventasOrdenadasMayorMenor = [...ventas].sort((a, b) => b.monto - a.monto);

// Imprimir - O(n log n)
console.log("Ventas ordenadas de mayor a menor:");
ventasOrdenadasMayorMenor.map(venta => {
    console.log(`${venta.producto}: L.${venta.monto}`);
});


