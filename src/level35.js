function smallestPositiveInteger(nums){
    nums.sort((a, b) => a - b); 
    let smallest = 1; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= smallest) {
        smallest += nums[i];
        } 
        else {
        break;
        }
    }
    return smallest;
};

module.exports = smallestPositiveInteger