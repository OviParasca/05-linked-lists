'use strict';

const LL = require('../../lib/linkedList.js');

describe('Linked List', () => {

  it('constructor()', ()=> {
    let list = new LL();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {
    let list = new LL();

    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Something Else';
    list.append(newValue);
    expect(list.head.next.value).toEqual(newValue);

    let anotherOne = 'Another One';
    list.append(anotherOne);
    expect(list.head.next.next.value).not.toEqual(newValue);
  });

  it('prepend()', () => {
    let list = new LL();

    let initialValue = 'First One';
    list.prepend(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Soemthing Else';
    list.prepend(newValue);
    expect(list.head.value).toEqual(newValue);

    let anotherOne = 'Another One';
    list.prepend(anotherOne);
    expect(list.head.value).not.toEqual(newValue);
  });


  it('remove at index', () => {
    let list = new LL();

    list.append('First One');
    list.append('Something Else');
    list.append('Another One');
    list.remove(2);

    expect(list.length).toEqual(2);

    list.append('Another One');
    list.remove(0);
    expect(list.length).toEqual(2);

    list.prepend('New Head');
    list.append('Another One');
    list.remove(3);
    expect(list.length).toEqual(3);
  });


  it('reverse the linked list', () => {
    let list = new LL();
    list.append('First One');
    list.append('2nd One');
    list.reverse();
    expect(list.head.value).toEqual('2nd One');

    list.prepend('New Head Node');
    list.reverse();
    expect(list.head.value).toEqual('First One');

    list.remove(0);
    list.reverse();
    expect(list.head.next.value).toEqual('2nd One');
  });

  it('testing the serialization and deserialization', () => {
    let list = new LL();
    list.append('First One');

    // serialize
    list.serialize();
    expect(list).toEqual({"head":{"value":"First One","next":null},"length":1});

    // deserialize
    list.deserialize();
    expect(list).toEqual({ head: { value: 'First One', next: null }, length: 1 });
  });

});