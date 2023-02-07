var twoSum = function(nums, target) {
    const store={}
    for(let i=0;i<=nums.length;i++){
        const difference=target-nums[i]

        if(store[difference] !==undefined){
            return [store[difference],i]
        }

        store[nums[i]]=i
    }
};

twoSum([2,7,11,15],9)
