// Complejidad del archivo: Tiempo O(n) debido a desencolar | Espacio O(n)

// Interfaz para la estructura de Cola
interface ICola<T> {
    encolar(elemento: T): void;
    desencolar(): T | undefined;
    frente(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
}

// Implementacion de Cola usando un arreglo
class ColaArreglo<T> implements ICola<T> {
    private elementos: T[] = [];

    // Agregar elemento al final de la cola - O(1)
    encolar(elemento: T): void {
        this.elementos.push(elemento);
    }

    // Quitar y retornar el elemento del frente - O(n)
    desencolar(): T | undefined {
        return this.elementos.shift();
    }

    // Retornar el elemento del frente sin quitarlo - O(1)
    frente(): T | undefined {
        if (this.estaVacia()) {
            return undefined;
        }
        return this.elementos[0];
    }

    // Obtener cantidad de elementos - O(1)
    tamaño(): number {
        return this.elementos.length;
    }

    // Verificar si la cola esta vacia - O(1)
    estaVacia(): boolean {
        return this.elementos.length === 0;
    }
}


console.log("--- Simulacion de la Caja (Cola) ---");
const colaClientes = new ColaArreglo<string>();

// Encolar clientes en la fila
colaClientes.encolar("Juan");
colaClientes.encolar("Maria");
colaClientes.encolar("Pedro");
colaClientes.encolar("Ana");
colaClientes.encolar("Carlos");

// Ver cliente al frente
console.log(`Cliente al frente de la fila: ${colaClientes.frente()}`);

// Atender clientes
console.log("\nAtendiendo clientes...");
const atendido1 = colaClientes.desencolar();
console.log(`- Atendido: ${atendido1}`);

const atendido2 = colaClientes.desencolar();
console.log(`- Atendido: ${atendido2}`);

const atendido3 = colaClientes.desencolar();
console.log(`- Atendido: ${atendido3}`);

// Clientes restantes
console.log(`\nClientes restantes en la fila de espera: ${colaClientes.tamaño()}`);
console.log(`Siguiente cliente en la fila para ser atendido: ${colaClientes.frente()}`);
