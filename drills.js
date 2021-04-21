'DSA-Sorting'

'3. Implementing quicksort'

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  
function partition(arr, start, end) {
    const pivot = arr[end-1]
    let j = start
    for (let i=start; i<end-1; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, j++)
        }
    }
    swap(arr, end-1, j)
    return j
}
  
function qSort(arr, start=0, end=arr.length) {
    if (start >= end) return arr
    const middle = partition(arr, start, end)
    arr = qSort(arr, start, middle)
    arr = qSort(arr, middle+1, end)
    return arr
}

const sortData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
//console.log(qSort(sortData))


'4. Implementing merge sort'
function mSort(arr) {
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)
    left = mSort(left)
    right = mSort(right)

    return merge(left, right, arr)
}
  
function merge(left, right, arr) {
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0
    while (leftIndex < left.length || rightIndex < right.length) {
        if (left[leftIndex] && left[leftIndex] <= (right[rightIndex]) || rightIndex >= right.length) {
            arr[outputIndex++] = left[leftIndex++]
        } else if (right[rightIndex] && (right[rightIndex] <= left[leftIndex] || leftIndex >= left.length)) {
            arr[outputIndex++] = right[rightIndex++]
        } else return console.log('something went wrong')
    }
    return arr
}

console.log(mSort(sortData))
  

'5. Sorting a linked list using merge sort'

'6. Bucket sort'

'7. Sort in place'

'8. Sorting books'