/**
 * 插入排序
 * @param {any} ary
 */

function insert(ary) {
    var handAry = [];//存储的是手里已经抓取的牌 
    handAry.push(ary[0]); //先抓一张牌（一般是转第一张）
    //循环抓取后面的牌
    for (var i = 1; i < ary. length; i++) {
        var cur = ary[i];//本次新抓的这张牌
        for (var j = handAry.length - 1; j >= 0; j--) {
            if (cur > handAry[j]) {   // 新抓的牌与手里的牌作比较                 handAry[j]： 当前手里抓的牌
                handAry.splice(j + 1, 0, cur);
                break;
            }
            if (j === 0) {
                handAry.unshift(cur);
            }

        }
    }
    return handAry;
}
var ary1 = [2, 3, 6, 1, 31, 2, 43, 5, 122, 21, 55, 88];
console.log(insert(ary1));