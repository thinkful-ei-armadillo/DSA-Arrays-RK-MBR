function urlify(str){
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === ' '){
      arr[i] = '%20';
    }
  }
  return arr.join('');
}

function filter(arr, num){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > num){
      result.push(arr[i]);
    }
  }
  return result;
}

function maxSum(arr){
  let result = 0;
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] + arr[i + 1] > result){
      result = (arr[i] + arr[i + 1]);
    }
    if(arr[i] + arr[i + 1] + arr[i + 2] > result){
      result = (arr[i] + arr[i + 1] + arr[i + 2]);
    }
    if(arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > result){
      result = (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3]);
    }
  }
  return result;
}

function merge(arr1, arr2){
  let result = [];
  for(let i = 0; i < arr1.length; i++){
    result.push(arr1[i]);
  }
  for(let i = 0; i < arr2.length; i++){
    result.push(arr2[i]);
  }
  return result.sort((a, b) => a - b);
}

function remove(str, filter){
  let result = [];
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    result.push(str[i]);
  }
  for(let i = 0; i < result.length; i++){
    for(let j = 0; j < filter.length; j++){
      if(result[i] === filter[j]){
        result[i] = '';
      }
    }
  }
  for(let i = 0; i < result.length; i++){
    newStr += result[i];
  }
  return newStr;
}

function products(arr){
  let result = [];
  let product = 1;
  for(let i = 0; i < arr.length; i++){
    product *= arr[i];
  }
  for(let i = 0; i < arr.length; i++){
    result.push(product / arr[i])
  }
  return result;
}

const array = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

function zero(arr){
  let result = array.map(line => line.slice(0));
  let idx = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === 0){
        idx.push(j);
        result[i] = [0,0,0,0,0];
      }
    }
  }
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      for(let k = 0; k < idx.length; k++){
        if(j === idx[k]){
          result[i][j] = 0;
        }
      }
    }
  }
  return result;
}

function rotationCheck(str1, str2){
  for(i = 0; i < str1.length; i++){
    let sub = str1.substring(0, i);
    let rest = str1.substring(i);   
    if(str2 === (rest + sub)){
      return true;
    }
  }
  return false;
}