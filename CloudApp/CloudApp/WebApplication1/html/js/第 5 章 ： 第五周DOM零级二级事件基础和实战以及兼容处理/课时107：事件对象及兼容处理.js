
//MouseEvent对象分析  KeyboardEvent
//clientX: 48  -鼠标触发点距离当前屏幕左上脚的距离
//clientY: 64  -鼠标触发点距离当前屏幕左上脚的距离
//offsetX: 39
//offsetY: 55
//pageX: 48  --距离body左上角（页面第一屏幕左上端）的距离 ---兼容问题 ie6-8 不存在该属性
//pageY: 64  --距离body左上角（页面第一屏幕左上端）的距离 ---兼容问题 ie6-8 不存在该属性
//type: "click"
//target: div#div1  事件源 当前鼠标触发的是哪个元素  ---兼容问题 ie6-8 不存在该属性
//defaultPrevented  阻止浏览器默认行为         e.preventDefault ? e.preventDefault() : e.returnValue = false;  //阻止浏览器默认行为  兼容问题

/////--------------------------------
//兼容处理  
//e = e || window.event
//pageX: 48  --距离body左上角（页面第一屏幕左上端）的距离 ---兼容问题 ie6-8 不存在该属性
//pageY: 64  --距离body左上角（页面第一屏幕左上端）的距离 ---兼容问题 ie6-8 不存在该属性
//target: div#div1  事件源 当前鼠标触发的是哪个元素  ---兼容问题 ie6-8 不存在该属性
//preventDefault          e.preventDefault ? e.preventDefault() : e.returnValue = false;  //阻止浏览器默认行为  兼容问题
//e.stopPropagation
$(function () {
    var oDiv = document.getElementById("div1");
    oDiv.onclick = function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.pageX = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
        e.preventDefault ? e.preventDefault() : e.returnValue = false;  //阻止浏览器默认行为  兼容问题
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;  //阻止冒泡
        console.log(arguments);
        console.log(e);
       // console.dir(arguments);
    }
    oDiv.onkeyup = function (e) {
        e = e || window.event;
        console.log(arguments);
    }
    //事件冒泡
    document.body.onclick = function myfunction() {
        console.log(arguments,10);
    }


    //第三个参数是控制在哪个阶段发生 true 在捕获阶段 false 在冒泡阶段发生
    document.body.addEventListener("click", function () {
        console.log("body");
    },false)
})