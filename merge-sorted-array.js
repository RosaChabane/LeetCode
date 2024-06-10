var merge = function(nums1, m, nums2, n) {
    nums1.slice(0, m);
    nums2.slice(0, n);
    nums1.concat(nums2);
    console.log(nums1);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);