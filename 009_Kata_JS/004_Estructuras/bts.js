// Elemento que va a conformar al arbol.
class Node {
    constructor(data){
        this.data= data;
        this.left = null;
        this.rigth = null;
        this.count = 0;
    }
}

// definición del arbol
class Tree {
    constructor(){
        this.root = null;
    }

    add(data){
        const newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while(true){
            if(data < currentNode.data){
                if(currentNode.left !== null){
                    currentNode = currentNode.left;
               } else {
                    currentNode.left = newNode;
                    return;
                }
            } else{
                if(currentNode.right !== null){
                    currentNode = currentNode.rigth;
                } else {
                    currentNode.rigth = newNode;
                    return;
                }
                }
            }
        }
    }

/*
    // Tener como métodos principales:
    // agregar - > add : se encarga de agregar un dato
    // contiene -> contains : verificar si un nodo existe respecto a un dato.
    add(data) {
        const newNode = new Node(data);
        // verificar si root está vacia : this.root 
        if(this.root === null){
            // si está vacio
            // crear nuevo nodo (data,null, null) : new Node(data, null, null);
            this.root = newNode;
            //return true;
        } else{
                // si no está vacia
                // crear un apuntador (current node) a mi raiz
                // currentNode = this.root;
                let currentNode = this.root;
                // agregar un ciclo mientras cada nodo sea un subarbol
                while(true){
                    // si la data de mi nuevo nodo es menor que la data en mi nodo actual
                    if(data < currentNode.data){
                        // revisar si el nodo izquierdo está vacio
                        if(currentNode.left === null){
                            // mi nodo actual le asigno a la izquierda el nuevo nodo
                            currentNode.left = newNode;
                            break;
                            //return true;
                        }
                    } else {
                        // si la data del nuevo nodo es mayor o igual que en mi nodo actual
                        // si el nodo derecho está vacio
                        if(currentNode.rigth === null){
                            // agregar nuevo nodo
                            // cambiar nuestro nodo actual por el hijo derecho del nodo actual
                            currentNode.rigth = newNode;
                            break;
                            //return;
                        }
                    }//else
                        //currentNode = currentNode.rigth;
                }//Close While
            }//else
    }//close add    
// Infinity
    //contains(data){
        // asignar a currente node el head 
        // let currentNode = this.root;
        // mientras currentNode exista 
            // si data es igual con currentnode.data
                // devolver verdadero
            // si mi  no es igual
                // si mi dato es menor currentnode.data
                    // asignar mi apuntador a la izquierda
                    // currentNode igual a currentNode.left
                // si mi dato no es menor 
                    // asignar mi apuntador a la derecha
                    // currentNode igual a currentNode.rigth
        // devolver falso porque no existe el nodo en el arbol

*/        
//}

const nuevoArbol = new Tree();
nuevoArbol.add('25');
/*nuevoArbol.add('32');
nuevoArbol.add('5');
nuevoArbol.add('60');
nuevoArbol.add('17');
nuevoArbol.add('9');*/
console.log(nuevoArbol);