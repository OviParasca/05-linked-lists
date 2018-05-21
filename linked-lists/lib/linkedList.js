'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  
  append(value) {
    let node = new Node(value);

    // This happens if the list is empty
    if (!this.head) {
      this.head = node;
      this.length = 1;

      return this;
    }

    // If we have already have a head node, add new new node to end of linked list
    let currentNode = this.head;
    // Big O = O(n)
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return this;
  }

  // Big O = O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head; 
    this.head = newNode;       
    this.length++;

    return this;
  }

  remove(offset) {
    let currentNode = this.head;
    let prevNode = currentNode;

    // Big O = O(n)
    for (var i = 0; i < this.length; i++) {
      if (offset == i) {
        let tempNode = currentNode.next;
        currentNode = undefined;
        prevNode.next = tempNode;
        this.length--;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  reverse() {
    var currentNode = this.head;
    var next, prev = null;
    
    // Big O = O(n)
    while(currentNode) {
      next = currentNode.next; 
      currentNode.next = prev; 
      prev = currentNode; 
      currentNode = next; 
    }
    this.head = prev;

    return this;
  }


  serialize() {
    var serialized = JSON.stringify(this);
 
    return serialized;
  }
 

  deserialize() {
    var deserialized = JSON.parse(JSON.stringify(this));
 
    return deserialized;
  }

}

module.exports = LinkedList;