var utils = {
    //实现将类数组转换为数组兼容
    listToArray: function (likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    },   //var arr = $.makeArray( obj );  jquery 方法
    jsonParse: function (str) {
        //ie 6-7 没有JSON对象
        //  var val = null;
        //try {
        //    val = JSON.parse(str);
        //} catch (e) {
        //    val = eval("(" + str + ")");
        //}
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    },

}
function sort() {
    var ary = utils.listToArray(oRows);
    ary.sort(function (a, b) {
        return parseFloat(a.cells[1].innerHtml) - parseFloat(a.cells[1].innerHtml);
    });
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tbody.appendChild(frg);
    frg = null;
}


var utils = (function () {
    var flag = 'getComputedStyle' in window
    return {
        listToArray: function (likeAry) {
            if (flag) {
                return Array.prototype.slice.call(likeAry, 0);
            }
            var ary = [];
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
            return ary;
        },

        jsonParse: function (str) {
            //ie 6-7 没有JSON对象
            //  var val = null;
            //try {
            //    val = JSON.parse(str);
            //} catch (e) {
            //    val = eval("(" + str + ")");
            //}
            return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
        },

        getCss: function (curEle, attr) {
            var val = null, reg = null;
            if (flag) {
                val = window.getComputedStyle(curEle, null)[attr];
            } else {
                if (attr === 'opacity') {
                    val = curEle.currentStyle['filter'];
                    reg = /^alpha\(opacity=(\d(?:\.\d+)?)\)$/;
                    val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
                } else {
                    val = curEle.currentStyle[attr];
                }
            }
            reg = /^(-?\d+(\.\d+)?)(px|pt|em|rem)?$/;
            return reg.test(val) ? parseFloat(val) : val;
        },

        children: function (curEle, tagName) {
            var ary = [];
            if (!flag) {
            } else {

            }
            if (typeof tagName === 'string') {

            }
            return ary;
        }

    }
}());

Array.prototype.myForEach = function myForEach(callBack, context) {
    context = context || window;
    if ('forEach' in Array.prototype) {
        this.forEach(callBack, context);
        return;
    }
    //ie6-8下自己编写回调执行的逻辑
    for (var i = 0; i < this.length; i++) {
        callBack && callBack.call(context, this[i], i, this);
    }
}


Array.prototype.myMap = function myForEach(callBack, context) {
    context = context || window;
    if ('map' in Array.prototype) {
        return this.map(callBack, context);
    }
    //ie6-8下自己编写回调执行的逻辑
    var newAry = [];
    for (var i = 0; i < this.length; i++) {
        if (typeof callBack === 'function') {
            var val = callBack.call(context, this[i], i, this);
            newAry[newAry.length] = val;
        }
    }
    return newAry;
}


// 柯理化函数思想：一个js预先处理的思想

function bind(callBack,context) {
    context = context || window;
    var outerAry = Array.prototype.slice.call(arguments, 2); //arguments.splice(2);
    return function () {
        var innerAry = Array.prototype.slice.call(arguments, 0);
        callBack.apply(context, outerAry.concat(innerAry));
    }
}

Function.prototype.myBind = function myBind(context) {
    var _this = this;
    var outerArg = Array.prototype.slice.call(arguments, 1);
    if ('bind' in Function.prototype) {
        return this.bind.apply(this, [context].concat(outerArg));
    }
   
    return function () {
        var innerArg = Array.prototype.slice.call(arguments, 0);
        innerArg.length === 0?innerArg[innerArg.length]=window.event:null;
        var arg = outerArg.concat(innerArg);
        _this.apply(context, arg);
    }
}