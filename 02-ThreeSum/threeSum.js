function threeSum(list) {
    if (!Array.isArray(list)) {
        console.warn('Please check the params!')
        return
    }
    let sum; // 总数
    let left; // 数组左边索引
    let right; // 数组右边索引
    let result = [];
    let sortList = list.sort((a, b) => {
        return a - b
    });
    for (let i = 0; i < sortList.length - 2; i++) {
        // 添加判断避免重复
        if (i !== 0 && sortList[i] === sortList[i -1]) {
            continue
        }
        left = i + 1;
        right = sortList.length - 1;
        while (left < right) {
            sum = sortList[left] + sortList[right];
            if (sum + sortList[i] === 0) {
                let resultArr = [];
                resultArr.push(sortList[i], sortList[left], sortList[right])
                result.push(resultArr);
                left++;
                right--;
                while (left < right && sortList[left] === sortList[left-1]) {
                    left++
                }
                while (left < right && sortList[right] === sortList[right + 1]) {
                    right--
                }
            } else if (sum + sortList[i] < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return result
}