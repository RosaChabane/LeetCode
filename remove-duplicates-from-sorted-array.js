// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
// The remaining elements of nums are not important as well as the size of nums.
// Return k.
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

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

//My Solution:

// MY ORIGINAL SOLUTION:
// Although the following solution works, it is not the most efficient for larger arrays (taking around 140ms) 
// Time Complexity = O(n^2)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
        nums.splice(i, 1);
        i--;
      }
    }
    const k = nums.length;
    return k;
};


// Explanation on this solution:
// - Run a loop with condition that removes an elements using splice if those two elements are equal (meaning if element is not unique).
// - Decrement i by 1 because the index will change due to splice shifting elements after removal.
// - Return the length of in-place modified nums array (k).


// The time complexity of O(n^2) is due to the .splice() method being used inside the loop:
// - The loop itself will perform an operation on every element in the array --> O(n)
// - Splice will also run an operation on every element in the array as well -- O(n)
// - Result = O(n) * O(n) --> O(n^2)
// - When splice removes an element from the array, it will shift all elements to the left to fill that now empty space, which is time-consuming. 


// MY UPDATED SOLUTION USING TWO-POINTER TECHNIQUE:
// Runtime: around 60ms
// Time Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1; 
};


// My Explanation:
// - Initalize 'j' as 0, this will be used as starting index of unique elements in nums.
// - Start the loop at index 1 (since j starts at 0).
// - When the condition finds elements that aren't equal (unique), increment 'j' and assign nums[j] to nums[i].
// - Return j + 1 to get the count of unique elements, since 'j' starts at zero.


//Tests:
removeDuplicates([0,0,1,1,1,2,2,3,3,4]); // [0,1,2,3,4]
removeDuplicates([1,1,2]); // [1,2]