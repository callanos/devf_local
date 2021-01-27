//Linkek List
//Una LL debe tener una cabacera (head) para indicar el inicio de la lista
//Una LL debe tener especificado el tamaño de la lista (length)

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    isEmpty(){

    }
    
    add(data){
        const node = new Node(data);
        if(this.head === null){
            this.head = node;
        } else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }

    get(index){
        if(this.head === null || index > this.length){
            return null;
        }else{
            let counter = 1;
            let currentNode = this.head;
            while(counter !== index){
            counter++;
            currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    delete(data){
        let currentNode = this.head;
        let previousNode = null;
        if(currentNode.data === data){
            this.head = this.currentNode.next;
        }else{
            while(currentNode.data !== data && currentNode.next !== null){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }    
        this.length--;
    }
}

const listaDeAlumnos = new LinkedList();
listaDeAlumnos.add('Cesar');
listaDeAlumnos.add('Yesid');
listaDeAlumnos.add('Jacobo');
listaDeAlumnos.add('Carlos');
listaDeAlumnos.delete('Cesar');

console.log(listaDeAlumnos);