// // Median of Two Sorted Arrays
// // Hard
// // 24.9K
// // 2.8K
// // Companies
// // Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// // The overall run time complexity should be O(log (m+n)).

// // Example 1:

// // Input: nums1 = [1,3], nums2 = [2]
// // Output: 2.00000
// // Explanation: merged array = [1,2,3] and median is 2.
// // Example 2:

// // Input: nums1 = [1,2], nums2 = [3,4]
// // Output: 2.50000
// // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function (nums1, nums2) {
//   //getting both arrays
//   let arr = [...nums1, ...nums2].sort((a, b) => a - b);
//   if (arr.length % 2 == 0) {
//     let ind1 = arr.length / 2;
//     let ind2 = ind1 - 1;
//     return (arr[ind1] + arr[ind2]) / 2;
//   } else {
//     let indodd = Math.floor(arr.length / 2);
//     return arr[indodd];
//   }
// };
// console.log(findMedianSortedArrays([1, 2], [3, 4]));

var removeNthFromEnd = function (head = [], n) {
  //get array
  //remove element at n position =>splice method
  // head.splice(3, 1);

  // return head;

  //   console.log(
  //     head
  //       .reverse()
  //       .filter((a, i) => i != n - 1)
  //       .reverse()
  //   );
  // };
  const newArr = [];
  for (let i = head.length - 1; i >= 0; i--) {
    if (i != head.length - n) {
      newArr.unshift(head[i]);
    }
  }
  console.log(newArr);
};

removeNthFromEnd([], 2);
