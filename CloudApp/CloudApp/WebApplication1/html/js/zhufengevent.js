//var fn = function () {}
//document.addEventListener("click", fn, false);
//document.removeEventListener("click", fn, false);

//ie6-8中
//document.attachEvent("onclick", fn);
//document.detachEvent("onclick", fn);
//标准浏览器和ie6-8浏览器之间的一些重要区别
//this问题：标准浏览器中给一个元素的某个行为绑定方法，当行为触发执行相应的方法的时候，方法中的this是当前的元素，但是在ie6-8中，方法执行，方法中的this是window
//重复问题：标准浏览器中不能给同一个元素的同一个行文绑定多个相同的方法，但是在ie6-8下是可以绑定的
//顺序问题：标准浏览器绑定的时候，是按照顺序依次把方法添加到事件池中，如果在下一次添加的时候，首先看一下现有的事件池中是否已经存在该方法，如果存在就不重复添加了，并且当行为触发的时候，会到事件池中按照添加的顺序依次执行对应的方法，但是ie6-8中，不知道是存储的时候没有按照顺序，还是执行的时候没有按照顺序，总之，当行为触发的时候，方法执行的顺序和之前绑定的顺序不关联
(function () {
    //bind 给当前元素的某一个行为绑定方法
    //curele 要绑定的元素  evenType 绑定的事件类型  evenFn 绑定的方法

    function bind(curele, evenType, evenFn) {
        if ("addEventListener" in document) {
            curele.addEventListener(evenType, evenFn, false);
            return;
        }
        var tempFn = function () {
            evenFn.call(curele);
        }
        tempFn.photo = evenFn;
        if (!curele['mybind'+evenType]) {
            curele['mybind' + evenType] = [];
        }
        var ary = curele['mybind' + evenType];
        //判断是否存在该方法evenFn
        for (var i = 0; i <ary. length; i++) {
            if (ary[i].photo === evenFn) {
                return;
            }
        }
        ary.push(tempFn);
        curele.attachEvent("on" + evenType, tempFn);
    }
    //unbind 给当前元素的某一个行为移除某个方法
    function unbind(curele, evenType, evenFn) {
        if ("removeEventListener" in document) {
            curele.removeEventListener(evenType, evenFn, false);
            return;
        }
        var ary = curele['mybind' + evenType];
        if (ary && ary instanceof Array) {  //bind 自定义属性curele['mybind'] 才为数组
            for (var i = 0; i < ary.length; i++) {
                if (ary[i].photo == evenFn) {
                    curele.detachEvent("on" + evenType, ary[i]);
                    ary.splice(i, 1);
                    break;//结束整个循环
                }
            }
        }
      
     //   curele.detachEvent("on" + evenType, curele['mybind']);
    }



    /*-----------解决方法执行的顺序---------------*/
    function on(curele, evenType, evenFn) {
        //模拟浏览器内置事件池创建一个自定义事件池
        if (!curele['myEvent' + evenType]) {
            curele['myEvent' + evenType]=[];
        }
        var ary = curele['myEvent' + evenType];
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] === evenFn) {
                return;
            }
        }
        ary.push(evenFn);
        //如果想在点击的时候执行run方法，我们需要把run方法添加到浏览器内置的事件池中
        //当每执行一次on方法，都会重新的给当前元素绑定run方法，但是这里我们是使用了上面写的bind方法实现绑定（bind解决了this和重复问题），所以不需要run重复绑定
        bind(curele, evenType, run);
    }
    //在自己定义的容器中，把需要移除的方法重容器中移除
    function off(curele, evenType, evenFn) {
        var ary = curele['myEvent' + evenType];
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] === evenFn) {
                //  ary.splice(i, 1);  为了防止塌陷问题，我们在移除的时候
                ary[i] = null;
                break;
            }

        }
    }

    //run --唯一给当前元素的某个行为在内置事件池中绑定的方法，当行为触发，执行run方法，我们在run中分别把存储在自己自定义的容器的的所有方法依次的执行
    function run(e) {
        e = e || window.event;
        //为了后期每个绑定方法中使用事件对象方便，我们统一的把事件对象兼容处理掉
        var flag = e.target ? true : false;
        if (!flag) {
            e.target = e.srcElement;
            e.pageX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
            e.pageY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
            e.preventDefault = function () {
                e.returnValue = false;
            };
            e.stopPropagation = function () {
                e.cancelBubble = true;
            }
        }
        var ary = this['myEvent' + e.type];   //   var ary = curele['myEvent' + evenType];
        for (var i = 0; i < ary.length; i++) {
            var tempFn = ary[i];
            if (typeof tempFn === "function") {
                tempFn.call(this, e);//因为内置的事件池中绑定的方法执行的时候，this都是当前要操作的元素，并且浏览器还会给其传递一个事件对象，而我们自己创建的容器中存储的所有方法其实都相当于是要给当前元素绑定的事件，为了和内置的统一，我们也让执行的时候this变为当前的元素，并且也给它传递一个事件对象
            } else {
                ary.splice(i, 1);
                i--;
            }
           
        }
    }

    //把自执行函数所形成的的闭包中的方法暴露给外面使用
    window.zhufengEvent = {
        on: on,
        off:off,
    }
    //on(oDiv, "click", fn1);
    //on(oDiv, "click", fn2);
    //on(oDiv, "click", fn3);
    //on(oDiv, "click", fn4);
    //on(oDiv, "click", fn5);
    //on(oDiv, "click", fn6);
})();