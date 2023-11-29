const nums1 = [1,2,3]
const nums2 = [4,5,6]
// const nums3 = nums1.concat(nums2, 'Filisbina', [23, 12,5555])

// ...rest -> ...spread
const nums3 = [...nums1, 'sadasda',...nums2, ...[7,8,99]]

console.log(nums3)
