function bubbleSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]){
        let swapped = swap(arr[j],arr[j+1]);
        arr[j] = swapped[0];
        arr[j+1] = swapped[1];
      //  swap(arr[j], arr[j+1])
        // let temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp
      }
    }
  }
  return arr;
}


function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  let storage = [a,b];
  return storage
}

