// Complejidad del archivo: Tiempo O(1) | Espacio O(n)

// Interfaz para la estructura de Pila
interface IPila<T> {
    apilar(elemento: T): void;
    desapilar(): T | undefined;
    tope(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
}

// Implementacion de Pila usando un arreglo
class PilaArreglo<T> implements IPila<T> {
    private elementos: T[] = [];

    // Agregar elemento al tope - O(1)
    apilar(elemento: T): void {
        this.elementos.push(elemento);
    }

    // Quitar y retornar el elemento del tope - O(1)
    desapilar(): T | undefined {
        return this.elementos.pop();
    }

    // Retornar el tope sin quitarlo - O(1)
    tope(): T | undefined {
        if (this.estaVacia()) {
            return undefined;
        }
        return this.elementos[this.elementos.length - 1];
    }

    // Obtener cantidad de elementos - O(1)
    tamaño(): number {
        return this.elementos.length;
    }

    // Verificar si la pila esta vacia - O(1)
    estaVacia(): boolean {
        return this.elementos.length === 0;
    }
}

// Simulacion de historial de navegacion
console.log("--- Simulacion de Historial de Navegacion ---");
const historial = new PilaArreglo<string>();

// Apilar paginas visitadas
historial.apilar("google.com");
historial.apilar("unah.edu.hn");
historial.apilar("campus.unah.edu.hn");
historial.apilar("correo.unah.edu.hn");

// Pagina actual
console.log(`Pagina actual (tope): ${historial.tope()}`);

// Retroceder dos veces (Atras)
console.log("\nPresionando 'Atras'...");
const atras1 = historial.desapilar();
console.log(`- URL retirada: ${atras1}`);

console.log("Presionando 'Atras' de nuevo...");
const atras2 = historial.desapilar();
console.log(`- URL retirada: ${atras2}`);

// Paginas restantes
console.log(`\nPáginas restantes en el historial: ${historial.tamaño()}`);
console.log(`Siguiente página a visitar si retrocede: ${historial.tope()}`);
