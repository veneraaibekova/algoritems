/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}  .
 */
 var merge = function(nums1, m, nums2, n) {
    let placement = nums1.length - 1;
    let compare1 = m - 1;
    let compare2 = n - 1;
    while (compare2 >= 0) {  
        if (compare1 < 0 || nums1[compare1] < nums2[compare2]) {
            nums1[placement] = nums2[compare2];
            compare2 -= 1;
        } else {  
            nums1[placement] = nums1[compare1];
            compare1 -= 1;
        }
        placement -= 1; 
    }
};