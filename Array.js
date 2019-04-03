/* eslint-disable eqeqeq */
const mem = require('./memory.js');
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }
  push(value) {
    this._resize(this.length + 1);
    memory.set(this.ptr + this.length, value);
    this.length++;
    
    // console.log('length', this.length)
    // console.log('mem add', memory.get(this.ptr))
  }
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    console.log('capacity: ', size)
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    console.log('value', memory.get(this.ptr + index))
    return memory.get(this.ptr + index);
  }
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    console.log('length', this.length)
    return value;
  } 
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
        
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
        
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}
Array.SIZE_RATIO = 3;
module.exports = Array;