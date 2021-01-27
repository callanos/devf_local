// Elemento que va a conformar al arbol.
class Node {
    constructor(data){
        this.data= data;
        this.left = null;
        this.rigth = null;
        //this.count = 1;
    }
}

class Tree {
    constructor(data){
        this.root = null;
    }

    add(data){
        let newNode = new Node(data);

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insNode(this.root, newNode);
        }
    }

    insNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            else
                this.insNode(node.left,newNode);
        } else {//right
            if(node.rigth === null)
                node.rigth = newNode;
            else
                this.insNode(node.rigth,newNode);
        }
    }
}

const nuevoArbol = new Tree();
nuevoArbol.add('25');
nuevoArbol.add('32');
nuevoArbol.add('5');
nuevoArbol.add('60');
nuevoArbol.add('17');
nuevoArbol.add('9');
console.log(nuevoArbol);