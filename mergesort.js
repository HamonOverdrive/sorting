function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */

  let middle = wholeArray.length / 2

  const firstHalf = wholeArray.slice(0, middle)
  const secondHalf = wholeArray.slice(middle)

  return [firstHalf, secondHalf];
}

function merge(left, right){

  let start = 0
  let arr = []

  for(let i = 0; i < left.length; i++){

    for(let j = start; j < right.length; j++){
      if(left[i]> right[j]){

        arr.push(right[j])
        start++;
      }
    }
    arr.push(left[i])
  }

  if(start !== right.length){
    arr = [...arr, ...right.slice(start)]
  }

  return arr;

}


function mergeSort(array) {

  /* your code here */
  if(array.length <= 1){
    return array
  }
  else{
    let arr = split(array)
    let left= arr[0]
    let right = arr[1]

    return merge(mergeSort(left), mergeSort(right))

  }

}
