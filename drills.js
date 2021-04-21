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

//console.log(mSort(sortData))
  

'5. Sorting a linked list using merge sort'
class _Node {
    constructor(value, next) {
      this.value = value
      this.next = next
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
    }
  
    insertFirst(item) {
      this.head = new _Node(item, this.head)
    }
  
    insertLast(item) {
      if (!this.head) {
        this.insertFirst(item)
        return
      }
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
    insertBefore(item, target) {
      let currNode = this.head
      if (!this.head) {
        return null
      }
      while (currNode.next.value !== target) {
        if (currNode.next.value === null) {
          return null
        } else {
          currNode = currNode.next
        }
      }
      currNode.next = new _Node(item, currNode.next)
    }
    insertAfter(item, target) {
      let currNode = this.head
      if (!this.head) {
        return null
      }
      while (currNode.value !== target) {
        if (currNode.next === null) {
          return null
        } else {
          currNode = currNode.next
        }
      }
      currNode.next = new _Node(item, currNode.next)
    }
    insertAt(item, pos) {
      let i = 0
      let currNode = this.head
  
      if (pos === 0) {
        this.insertFirst(item)
      }
      if (!this.head) {
        return null
      }
      while (i < pos) {
        currNode = currNode.next
        i++
      }
      this.insertBefore(item, currNode.value)
    }
  
    find(item) {
      let currNode = this.head
  
      if (!this.head) {
        return null
      }
      while (currNode.value !== item) {
        if (currNode.next === null) {
          return null
        } else {
          currNode = currNode.next
        }
      }
      return currNode
    }
    remove(item) {
      if (!this.head) {
        return null
      }
  
      if (this.head.value === item) {
        this.head = this.head.next
      }
      let currNode = this.head
      let previousNode = this.head
      while (currNode !== null && currNode.value !== item) {
        previousNode = currNode
        currNode = currNode.next
      }
      if (currNode === null) {
        console.log('item not found')
        return
      }
      previousNode.next = currNode.next
    }
    cut(item) {
      let tempList = new LinkedList()
      tempList.head = { ...this.head }
      // console.log(tempList.head)
      if (!tempList.head) {
        return
      }
  
      if (tempList.head.value === item) {
        tempList.head = tempList.head.next
      }
      let currNode = tempList.head
      let previousNode = tempList.head
      while (currNode !== null && currNode.value !== item) {
        previousNode = currNode
        currNode = currNode.next
      }
      if (currNode === null) {
        // console.log('item not found');
  
        return tempList
      }
      previousNode.next = null
      // console.log('templist' + tempList)
      return tempList
    }
  }
  
  function size(list) {
    let length = 1
    let currNode = list.head
    if (!list.head) {
      return null
    }
    while (currNode.next !== null) {
      currNode = currNode.next
      length++
    }
    // console.log(length);
    return length
  }
  
  function getMid(list) {
    // console.log(list)
    if (!list) {
      return ''
    } else {
      // console.log('list', list)
      let currNode = list.head
      let i = 0
      // console.log(size(list))
      let count = Math.floor(size(list) / 2)
      while (i < count) {
        currNode = currNode.next
        i++
      }
      // console.log(currNode.value);
      return currNode
    }
  }
  
  function mergeSort(list) {
    if (list.head.next === null) {
      return list
    }
    let resList = new LinkedList()
    let tempList = new LinkedList()
    const middle = getMid(list)
    // console.log(middle)
    tempList.head = { ...middle }
    // console.log(tempList)
    let left = list.cut(middle.value)
    let right = tempList
    // console.log('right' + right)
  
    left = mergeSort(left)
    right = mergeSort(right)
  
    return merge(left, right, resList)
  }
  
  function merge(left, right, list) {
    let lNode = left.head
    let rNode = right.head
  
    while (lNode !== null && rNode !== null) {
      if (lNode.value < rNode.value) {
        list.insertLast(lNode.value)
        lNode = lNode.next
      } else {
        list.insertLast(rNode.value)
        rNode = rNode.next
      }
    }
    while (lNode !== null) {
      list.insertLast(lNode.value)
      lNode = lNode.next
    }
    while (rNode !== null) {
      list.insertLast(rNode.value)
      rNode = rNode.next
    }
  
    return list
  }
  
  function main() {
    let SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Tauhida')
  }
  
//console.log(main())
  

'6. Bucket sort'
const bucketArray = [4, 5, 3, 1, 9, 8, 6, 7, 2, 9, 9, 3]
const bSort = (max, min, arr) => {
  const range = max-min
  let buckets = []
  for (let i=0; i<= range; i++) {
    buckets.push([])
  }
  for (let j=0; j< bucketArray.length; j++) {
    buckets[arr[j]-1].push(arr[j])
  }
  return(buckets.reduce((acc, val) => acc.concat(val), []))
}
//console.log(bSort(9, 1, bucketArray));

'7. Sort in place'
const sortArray = [4, 5, 3, 1, 9, 8, 6, 7, 2, 9, 9, 3]

function arrayRandomizer(arr) {
    for (let i=0; i< arr.length; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length)
      swap(arr, arr[i], arr[randomIndex])
    }
    return arr
}
console.log(sortArray)
console.log(arrayRandomizer(sortArray))

'8. Sorting books'