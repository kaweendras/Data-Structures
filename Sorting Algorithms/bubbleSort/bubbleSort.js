
function bubbleSort(arr) {
  let less = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j + 1] < arr[j]) {
        less = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = less
      }
    }
  }
  return arr
}