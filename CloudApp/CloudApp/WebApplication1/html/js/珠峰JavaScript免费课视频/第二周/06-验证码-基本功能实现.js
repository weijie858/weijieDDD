
//生成四位随机验证码
var codebox = document.getElementById('tbl');
var areastr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
areastr.length; areastr.toUpperCase();
var result = null;
for (var i = 0; i < 4; i++) {
    //随机获取一个0-61之间的整数，作为接下来的字符的索引 
    //(n,m) 之间的整数  Math.round(  Math.random()*(m-n)+n )
    var ran=Math.round(Math.random()*(61-0)+0)
    //根据索引获取一个随机字符
    //把每一次循环获取的字符存放到最后结果中
}
codebox.innerHTML = result;



///*
//* n到m-1之间的随机整数
//* */
//function random(n, m) {
//    return Math.round(Math.random() * (m + 1 - n) + n);
//}

//console.log(random(1, 10));