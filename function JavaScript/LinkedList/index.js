function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
}

LinkedList.prototype.addToHead = function(value) {
    debugger
    var newNode = new Node(value, null, this.head);
    if(this.head) this.head.previous = newNode;
    else this.tail = newNode;
    this.head = newNode;
}
LinkedList.prototype.addToTail = function(value) {
    debugger
    var newNode = new Node(value, this.tail,null);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
    debugger;
    if(!this.head) return null;  
    var val = this.head.value;  
    this.head = this.head.next;
    if(this.head) this.head.previous = null;
    else this.tail = null
    return val;
}

LinkedList.prototype.removeTail = function() {
    debugger;
    if(!this.tail) return null;    
    this.tail = this.tail.previous;
    if(this.tail) this.tail.next = null;
    else this.head = null
    return this.tail.value;
}

var LL = new LinkedList();
LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);
//LL.removeHead();
console.log(LL.removeHead());
//console.log(LL.removeTail());