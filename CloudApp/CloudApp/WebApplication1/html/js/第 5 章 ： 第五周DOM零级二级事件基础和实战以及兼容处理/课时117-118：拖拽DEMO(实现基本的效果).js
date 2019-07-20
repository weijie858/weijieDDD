//js实现让当前的元素在屏幕居中的位置
var box = document.getElementById("box");
box.style.top = ((document.documentElement.clientHeight || document.body.clientHeight) - box.offsetHeight) / 2 + "px";  //(当前屏幕的高度-盒子的高度)/2
box.style.left = ((document.documentElement.clientWidth || document.body.clientWidth) - box.offsetWidth) / 2 + "px";//(当前屏幕的宽度-盒子的宽度)/2
//onmousedown onmousemove onmouseup
box.onmousedown = down;
function down(e) {
    e = e || window.event;
    //记录开始位置的信息
    this['strX'] = e.clientX;//鼠标开始X的位置
    this['strY'] = e.clientY;//鼠标开始Y的位置
    this['strL'] = parseFloat(this.style.left);//盒子开始的left
    this['strT'] = parseFloat(this.style.top);//盒子开始的top
    if (this.setCapture) {  //ie和火狐支持 setCapture  把当前的鼠标和当前元素this（#box）绑定在一起
        this.setCapture();//把当前的鼠标和当前元素this（#box）绑定在一起
        this.onmousemove = move;
        this.onmouseup = up;
    } else {
        var _this = this;
        document.onmousemove = function (e) {
            move.call(_this, e);
        };
        document.onmouseup = function (e) {
            up.call(_this, e);
        };
    }
  
}
function move(e) {
    e = e || window.event;
    var curL = (e.clientX - this['strX']) + this["strL"];//盒子运动后的left
    var curT = (e.clientY - this['strY']) + this["strT"];//盒子运动后的top

    //边界判断
    var minL = 0, minT = 0,
        maxL = (document.documentElement.clientWidth || document.body.clientWidth) - this.offsetWidth,
        maxT = (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight;
    curL = curL < minL ? minL : (curL > maxL ? maxL : curL);
    curT = curT < minT ? minT : (curT > maxT ? maxT : curT);
    this.style.left = curL + "px";
    this.style.top = curT + "px";

}
function up(e) {
    if (this.setCapture) {  //ie和火狐支持 setCapture  把当前的鼠标和当前元素this（#box）绑定在一起
       //把当前的鼠标和当前元素this（#box）绑定在一起
        this.releaseCapture();
        this.onmousemove = null;
        this.onmouseup = null;
    } else {
        document.onmousemove = null;
        document.onmouseup = null;
    }
  
}


//当鼠标移动过快的时候，我们的鼠标会脱离盒子，导致盒子的mouseup和mousemove事件都移除不到----鼠标焦点丢失


//在ie和火狐浏览器中，我们用一个方法把盒子和鼠标绑定在一起即可  但是这个方法在谷歌下不兼容

//谷歌解决思路方案：鼠标在快也跑不出文档，我们把mousemove和mouseup绑定给document