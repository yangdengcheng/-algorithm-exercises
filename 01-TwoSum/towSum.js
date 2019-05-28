/**
 * Two Sum
 * 给定一个数组和一个目标数，在数组中找出两项相加的和等于目标数，并返回索引值；
 * @param list 数组
 * @param target 目标数
 * @returns {[]}
 */
function twoSumCal(list, target) {
    if (!Array.isArray(list) || isNaN(target)) {
        console.warn('Please check the params!')
        return
    }
    let initArr = [];
    for (let i = 0; i < list.length; i++) {
        initArr[list[i]] = i
    }
    for (let i = 0; i < list.length; i++) {
        let j = initArr[target - list[i]]
        if (j !== undefined && i !== j) {
            return [i, j]
        }
    }
}

function twoSumTest() {
    let list = [3, 3]
    let target = 6
    let result = twoSumCal(list, target)
    let currentResult = [ 0, 1 ]
    return result.sort().toString() === currentResult.sort().toString() ? console.log('Test Success!') : console.warn('Test Error!')
}

twoSumTest()
