/**
 * 插入排序
 * @param {any} ary  需要排序的数组
 */

function insert(ary) {
    var handAry = [];//存储的是手里已经抓取的牌  规定：左小右大的顺序
    handAry.push(ary[0]); //先抓一张牌（一般是抓第一张）
    //循环抓取后面的牌
    for (var i = 1; i < ary. length; i++) {
        var cur = ary[i];//本次新抓的这张牌
        for (var j = handAry.length - 1; j >= 0; j--) {   // 新抓的牌与手里的牌作比较   从右往左比
            if (cur > handAry[j]) {   // handAry[j]： 当前手里抓的牌
                handAry.splice(j + 1, 0, cur);
                break;
            }
            if (j === 0) { //本次新抓的这张牌 比手里最后一张牌都小 
                handAry.unshift(cur);
            }

        }
    }
    return handAry;
}


