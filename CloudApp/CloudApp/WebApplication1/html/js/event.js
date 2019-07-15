/*
bind；处理DOM2级事件绑定的兼容性问题
@parameter
curEle 要绑定事件的元素
eventType 要绑定的事件类型
eventFn 要绑定的方法
*/

function bind(curEle, eventType, eventFn) {
    if ("addEventListener" in document) {
        curEle.addEventListener(eventType, eventFn, false);
        return;
    }
    var tempFn = function () {
        eventFn.call(curEle);
    }
    tempFn.photo = eventFn;
    if (!curEle['myBind' + eventType]) {
        curEle['myBind' + eventType] = [];
    }
    var ary = curEle['myBind' + eventType];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        if (cur.photo === eventFn) {
            return;
        }
    }
    curEle['myBind' + eventType].push(tempFn);
    curEle.attachEvent("on" + eventType, tempFn);
}
function unbind(curEle, eventType, eventFn) {
    if ("addEventListener" in document) {
        curEle.removeEventListener(eventType, eventFn, false);
        return;
    }
    var ary = curEle['myBind' + eventType];
    for (var i = 0; i < ary.length; i++) {
        if (ary[i].photo === eventFn) {
            ary.splice(i, 1);
            curEle.detachEvent("on" + eventType, ary[i]);
            break;
        }
    }
}

//创建事件池，并且把需要给当前元素绑定的方法依次的增加到事件池中
function on(curEle, eventType, eventFn) {
    if (!curEle["myEvent" + eventType]) {
        curEle["myEvent" + eventType] = [];
    }
    var ary = curEle["myEvent" + eventType];
    for (var i = 0; i < ary.length; i++) {
        if (ary[i] === eventFn) {
            return;
        }
    }
    ary.push(eventFn);
   // curEle.addEventListener(EventTarget, run, false);  //执行on的时候，我们给当前元素绑定了一个点击行为，当点击的时候执行run方法：run方法中的this是当前元素curEle，并且浏览器给run传递了一个MouseEvent事件对象
    bind(curEle, eventType, run);
}

//在自己的事件池中把某一个方法移除
function off(curEle, eventType, eventFn) {
    var ary = curEle["myEvent" + eventType];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        if (cur === eventFn) {
            ary.splice(i, 1);
            break;
        }
    }
}
//我们只给当前元素的点击行为绑定一个方法run，当触发点击的时候执行的是run方法，我在
//run方法中根据自己存储的方法顺序分别再把这些方法执行
function run(e) {
    e = e || window.event;
    var flag = e.target ? true : false;
    if (!flag) {
        e.target = e.srcElement;
        e.pageX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        e.pageY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
        e.preventDefault = function () {
            e.returnValue = false;
        }
        e.stopPropagation = function () {
            e.cancelable = true;
        }
    }
    var ary = e.target["myEvent" + e.type];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        cur.call(e.target,e);
    }
}

var num = 0;
function myfunction1() {
    num++;
    console.log(1);
    if (num > 3) {
        off(box, "click", myfunction1);
        off(box, "click", myfunction2);
        off(box, "click", myfunction3);
        off(box, "click", myfunction4);
        off(box, "click", myfunction5);
        off(box, "click", myfunction5);
        off(box, "click", myfunction6);
    }
}
function myfunction2() {
    console.log(2);
}
function myfunction3() {
    console.log(3);
}
function myfunction4() {
    console.log(4);
}
function myfunction5() {
    console.log(5);
}
function myfunction6() {
    console.log(6);
}
function myfunction7() {
    console.log(7);
}
function myfunction8() {
    console.log(8);
}
function myfunction9() {
    console.log(9);
}
function myfunction10() {
    console.log(10);
}
function myfunction11() {
    console.log(11);
}
function myfunction12() {
    console.log(12);
}
function myfunction13() {
    console.log(13);
}



on(box, "click", myfunction1);
on(box, "click", myfunction2);
on(box, "click", myfunction3);
on(box, "click", myfunction4);
on(box, "click", myfunction5);
on(box, "click", myfunction6);
on(box, "click", myfunction7);
on(box, "click", myfunction8);
on(box, "click", myfunction9);
on(box, "click", myfunction10);
on(box, "click", myfunction11);
on(box, "click", myfunction12);
on(box, "click", myfunction13);
