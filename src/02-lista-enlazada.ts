// Complejidad del archivo: Tiempo O(n) | Espacio O(n)

// Nodo de la lista enlazada
class Nodo<T> {
    public valor: T;
    public siguiente: Nodo<T> | null;

    constructor(valor: T) {
        this.valor = valor;
        this.siguiente = null;
    }
}

// Interfaz para la lista
interface ILista<T> {
    insertarAlFinal(valor: T): void;
    eliminarPrimero(): T | null;
    buscar(valor: T): boolean;
    tamaño(): number;
    imprimir(): void;
}

// Implementacion de lista enlazada simple
class ListaEnlazada<T> implements ILista<T> {
    private cabeza: Nodo<T> | null = null;

    // Agregar un nodo al final de la lista - O(n)
    insertarAlFinal(valor: T): void {
        const nuevoNodo = new Nodo(valor);
        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
            return;
        }

        let actual = this.cabeza;
        while (actual.siguiente !== null) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
    }

    // Quitar el primer nodo y retornar su valor - O(1)
    eliminarPrimero(): T | null {
        if (this.cabeza === null) {
            return null;
        }
        const valorEliminado = this.cabeza.valor;
        this.cabeza = this.cabeza.siguiente;
        return valorEliminado;
    }

    // Buscar si un valor existe en la lista - O(n)
    buscar(valor: T): boolean {
        let actual = this.cabeza;
        while (actual !== null) {
            if (actual.valor === valor) {
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    // Retornar la cantidad de nodos - O(n)
    tamaño(): number {
        let contador = 0;
        let actual = this.cabeza;
        while (actual !== null) {
            contador++;
            actual = actual.siguiente;
        }
        return contador;
    }

    // Imprimir los valores de la lista - O(n)
    imprimir(): void {
        const valores: T[] = [];
        let actual = this.cabeza;
        while (actual !== null) {
            valores.push(actual.valor);
            actual = actual.siguiente;
        }
        console.log("Lista Enlazada:", valores.join(" -> "));
    }
}

// Pruebas del ejercicio
console.log("--- Prueba de Lista Enlazada ---");
const listaClientes = new ListaEnlazada<string>();

// Insertar 4 clientes
listaClientes.insertarAlFinal("Juan");
listaClientes.insertarAlFinal("María");
listaClientes.insertarAlFinal("Pedro");
listaClientes.insertarAlFinal("Ana");

console.log("Lista inicial:");
listaClientes.imprimir();
console.log(`Tamaño actual: ${listaClientes.tamaño()}`);

// Busquedas
const buscarMaria = "María";
const buscarCarlos = "Carlos";
console.log(`¿Existe '${buscarMaria}'?: ${listaClientes.buscar(buscarMaria)}`);
console.log(`¿Existe '${buscarCarlos}'?: ${listaClientes.buscar(buscarCarlos)}`);

// Eliminar el primer cliente
const eliminado = listaClientes.eliminarPrimero();
console.log(`\nCliente eliminado de la primera posición: ${eliminado}`);

// Imprimir lista resultante
console.log("Lista resultante:");
listaClientes.imprimir();
console.log(`Tamaño final: ${listaClientes.tamaño()}`);
