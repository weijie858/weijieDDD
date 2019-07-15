//js实现让当前的元素在屏幕居中的位置
var box = document.getElementById("box");
box.style.top = ((document.documentElement.clientHeight || document.body.clientHeight) - box.offsetHeight) / 2 + "px";
box.style.left = ((document.documentElement.clientWidth || document.body.clientWidth) - box.offsetWidth) / 2 + "px";
//onmousedown
//onmousemove
//onmouseup
box.onmousedown = down;
function down(e) {
    e = e || window.event;
    this['strX'] = e.clientX;
    this['strY'] = e.clientY;
    this['strL'] = parseFloat(this.style.left);
    this['strT'] = parseFloat(this.style.top);
    this.onmousemove = move;
    this.onmouseup = up;
}
function move(e) {
    e = e || window.event;
    var curL = (e.clientX - this['strX']) + this["strL"];
    var curT = (e.clientY - this['strY']) + this["strT"];

    //边界判断
    var minL = 0, minT = 0, maxL = (document.documentElement.clientWidth || document.body.clientWidth) - this.offsetWidth, maxT = (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight;
    curL = curL < minL ? minL : (curL > maxL ? maxL : curL);
    curT = curT < minT ? minT : (curT > maxT ? maxT : curT);
    this.style.left = curL + "px";
    this.style.top = curT + "px";

}
function up(e) {
    this.onmousemove = null;
    this.onmouseup = null;
}