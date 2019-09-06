// 1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// 21, 1, 26, 45, 29, 28, 2, 9
// 21, 1, 26, 45 //3rd call
// 21, 1 
// 21
// 1 -> //1, 21
// 26, 45
// 26
// 45 -> //26, 45 -> 1, 21, 26, 45
// 29, 28, 2, 9
// 29, 28
// 29
// 28 -> //28, 29
// 2, 9
// 2
// 9 //16th call
// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// 21, 1, 26, 45
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// 9
// What are the first 2 lists to be merged?
// 1, 21 and 26, 45
// Which two lists would be merged on the 7th merge?
// 1, 21, 26, 45 and 2, 9, 28, 29



// 2. Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort 
// an array in ascending order. After the first partition step has been completed, 
// the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which 
// of the following statements is correct about the partition step? Explain your answer.

// The pivot could have been either 14 or 17
// everything to the left of 14 and 17 respectively is less than the number itself.
// everything to the right for both numbers is larger as well. Due to this, either would
// work this way if they had been set as the pivot


// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
// show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
// 10, 3, 9, 12, 19, 14, 17, 16, 13, 15
// 3, 9, 10, 12, 19, 14, 17, 16, 13, 15
// When using the first item on the list as a pivot
// 12, 9, 3, 10, 13, 14, 15, 16, 17, 19
// 10, 3, 9, 12, 13, 14, 15, 16, 17, 19



// 3. Implementing quicksort
// Write a function qSort that sorts a dataset using the quicksort algorithm. 
// The dataset to sort is: 
// 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 
// 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 
// 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 
// 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5



// 4. Implementing merge sort
// Write a function mSort that sorts the dataset above using the merge sort algorithm.



// 5. Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. You will need 
// your linked list class from previous lesson to create the list and use all 
// of its supplemental functions to solve this problem.
function sortList(list){
  let currNode = list.head;
  let nextNode = currNode.next;
  let swap = 0;
  while(nextNode !== null){
    if(currNode.value > nextNode.value){
      list.insertLast(currNode.value);
      list.remove(currNode.value);
      currNode = nextNode;
      nextNode = currNode.next;
      swap++;
    } else {
      currNode = nextNode;
      nextNode = currNode.next;
    }
  }
  if(swap > 0){
    return sortList(list);
  }
  return display(list);
}


// 6. Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in 
// advance what the lowest and highest values are. You can't use arr.splice(), 
// shift() or unshift() for this exercise.
function buckSort(arr, high, low){
  let res = [];
  for(let i=0; i<arr.length; i++){
    res[arr[i]] = arr[i];
  }
  return res.filter(num => num >= low );
}
// console.log(buckSort([ 16, 19, 9, 14, 12, 10, 3, 17, 15, 13 ], 19, 3));


// 7. Sort in place
// Write an algorithm to shuffle an array into a random order in place 
// (i.e., without creating a new array).
function ranSort(arr, num = Math.floor(Math.random()*arr.length+1)){
  let res;
  for(let i=0; i<=num; i++){
    res = swap(arr, i, Math.floor(Math.random()*arr.length+1));
  }
  return res;
}
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
  return array;
}
// console.log(ranSort([ 3, 9, 10, 12, 13, 14, 15, 16, 17, 19 ]));

// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. 
// Express this as an algorithm and them implement your algorithm.