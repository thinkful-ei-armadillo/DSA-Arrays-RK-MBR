const Array = require('./Array');

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(1);// length=1 , capacity=1 and memory address= 3
  arr.push(5);// length=2 , capacity=2 and memory address= 3
  arr.push(15);// length=3 , capacity=3 and memory address= 3
  arr.push(19);// length=4 , capacity=4 and memory address= 3
  arr.push(45);// length=5 , capacity=5 and memory address= 3
  arr.push(10);// length=6 , capacity=6 and memory address= 3
  arr.pop();// length=5 , capacity=6 and memory address= 3
  arr.pop();// length=4 , capacity=6 and memory address= 3
  arr.pop();// length=3 , capacity=6 and memory address= 3 //Length is the only thing that gets removed so memory and capacity stays the same
  console.log('first item', arr.get(0))
  arr.pop();
  arr.pop();
  arr.push('tauhida') //result was NaN because the memory value is actually suppose to be a float number 'this.memory = new Float64Array(1024);'
  console.log('first item', arr.get(0))
  // _resize is to empty the spot that we are pushing the new data into
}
console.log(main());