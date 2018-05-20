'use strict';

const linkedList = require('./lib/linkedList.js');

let ll = new linkedList();

ll.append("head node");
ll.append("2nd node");
ll.append("3rd node");
ll.append("4th node");
ll.append("5th node");


// console.log(ll.length);
// console.log(ll.prepend("lalala"));
// ll.remove(4);
// console.log(ll.length);

ll.reverse();
console.log(`new head node: ${ll.head.value}`);
console.log(ll.head.next.value);
console.log(ll.head.next.next.value);
console.log(ll.head.next.next.next.value);
console.log(ll.head.next.next.next.next.value);
