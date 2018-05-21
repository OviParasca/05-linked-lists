'use strict';

const Node = require('../../lib/node.js');

describe('Node Module', () => {

  it('constructor() of the Node.js', () => {
    let value = 'Some Value';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });

});