// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.


// My Solution:
// Runtime: 51ms
// Time Comlplexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1; 
    for (let i = 2; i < nums.length; i++) { 
        if (nums[i] !== nums[j] || nums[i] !== nums[j-1]) {  
            j++;
            nums[j] = nums[i];  
        }
    }
    return j + 1; 
};


// My Explanation:
// - This solution uses a two-pointer algorithm technique, pointer j will start at index 1 and i will start at index 2
// - Throughout this loop, techinally 3 indexes will be evaluated nums[i], nums[j], and nums[j-1]
// - The condition checks if the current element is not a third duplicate by comparing it against the last two unique confirmed elements.
// - If it's a duplicate, the current element (nums[i]) will be replaced with nums[j] 


// Visual Representation of the Two-Pointer Algorithm:
//
// This solution uses two-pointers, i and j.
// [1,1,1,2,2,3] i = 2 j = 1
//    ^ ^   
// No condition will be met.
// [1,1,1,2,2,3] i = 3 j = 2
//      ^ ^
// nums[2] !== nums[1]
// This results in nums[2] (which is 1) becoming 2.
// [1,1,2,2,2,3] i = 4  j = 3 
//        ^ ^
// No condition will be met.
// [1,1,2,2,2,3] j = 4 i = 5
//          ^ ^
// This results in num[4] (which is 2) becoming 3.
// [1,1,2,2,3,3]
// This is where the loop will end, although there is an extra 3 at the end of the array, the challenge will only check for the first 'k' elements.
// In this example, returning j + 1 (5), meaning k = 5.


//Tests:
removeDuplicates([1,1,1,2,2,3]); // [1,1,2,2,3]
removeDuplicates([0,0,1,1,1,1,2,3,3]); // [0,0,1,1,2,3,3] 
// Note on output: the only elements being considered to pass all tests is the first k elements 