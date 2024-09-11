class listNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }
  appendNode(data) {
    let newNode = new listNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  prependNode(data) {
    let newNode = new listNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  displayNodes() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      count++;
      currentNode = currentNode.next;
    }
    console.log(count);
  }
  first() {
    let currentNode = this.head;
    console.log(currentNode.data);
  }
  last() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    console.log(currentNode.data);
  }
  at(num) {
    let i = 0;
    let currentNode = this.head;
    while (i < num && currentNode.next != null) {
      currentNode = currentNode.next;
      i++;
    }
    if(i < num) {
        console.log('the this is not this long')
    } else {
        console.log(currentNode.data)
    }
  }
  pop() {
    if(this.head == null) {
        return this.head;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next != null){
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    previousNode.next = null;
  }

  removePosition(position) {
    let current = this.head;
    let previous = null;
    let count = 0;

    while(current != null && count < position) {
        previous = current;
        current = current.next;
        count++;
    }
    if(current == null) {
        console.log('the linked this is not this long')
        return
    }
    previous.next = current.next
  }
  containsValue(num) {
    num = parseInt(num);
    let currentNode = this.head;
    while(currentNode != null) {
        if(currentNode.data == num) {
            console.log('true')
            return
        }
        currentNode = currentNode.next;
    }
    console.log('false')
  }
  findValue(num) {
    let currentNode = this.head;
    let count = 0;
    while(currentNode != null) {
        if(currentNode.data == num) {
            console.log(count)
            return
        } else {
            count++;
            currentNode = currentNode.next;
        }
    }
    console.log('value not found')
  }
  toString() {
    let currentNode = this.head;
    let stringthis = "";
    while (currentNode != null) {
      stringthis += `(${currentNode.data}) -> `;
      currentNode= currentNode.next;
    }
    console.log(`${stringthis} (null)`);
  }
}

let linked = new linkedList();

linked.appendNode('dog');
linked.appendNode('cat');
linked.appendNode('rat');
linked.displayNodes()
// linked.size()
// linked.first()
// linked.last();
// linked.at(3);
// linked.displayNodes();
// linked.removePosition(1)
// console.log('----')
// linked.displayNodes();
// linked.containsValue(6)
// linked.containsValue(7)
linked.toString();
