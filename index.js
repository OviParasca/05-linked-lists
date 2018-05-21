'use strict';

const linkedList = require('./linked-lists/lib/linkedList.js');

let ll = new linkedList();

ll.append("head node");
ll.append("2nd node");
ll.append("3rd node");
ll.append("4th node");
ll.append("5th node");

ll.reverse();
console.log(`new head node: ${ll.head.value}`);
console.log(ll.head.next.value);
console.log(ll.head.next.next.value);
console.log(ll.head.next.next.next.value);
console.log(ll.head.next.next.next.next.value);

console.log(ll.serialize());
console.log(ll.deserialize());
