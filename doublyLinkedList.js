
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return null;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
        }
        this.length--;
        return poppedNode;
    }

    // TO SHIFT THE NODE FROM THE BEGINNING
    shift(){
        if(this.length === 0) return null;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    // TO ADD ADDITIONAL NODE FROM THE BEGINNING
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // TO GET A SINGLE NODE
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current, count;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        }else{
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    // TO UPDATE THE NODE
    set(index, value){
        var foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // TO INSERT A NEW NODE AT A SPACIFIED POSITION BASED ON THE INDEX
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0 ) return this.unshift(val);
        if(index === this.length) return this.push(val);
        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        // 2 3 4 5
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    
    // TO REVERSE THE ENTIRE LIST
    reverse(){
        if(this.length <= 1) return this;
        
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        
        while(current !== null){
            var temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = temp;
        }
        
        return this;
    }
}

var newlist = new doublyLinkedList();

newlist.push("Orange");
newlist.push("Pineapple");
newlist.push("Apple");
newlist.push("Banana");
newlist.push("Mango");
newlist.push("Paw-Paw");
newlist.push("Gueva");
newlist.push("Watermelon");
newlist.push("Sour-sop");
newlist.push("Tamarind");







