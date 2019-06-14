//http://www.w3school.com.cn/jsref/jsref_obj_global.asp


Number()
Number(true); //1
Number(false);//0
Number(null); //0
Number(undefined); //NaN
//把引用数据类型转换为number，首先需要把引用数据类型转化为字符串（tostring），在把字符串转换为number即可 例如
// [] -- "" --0  
Number([12, 13]);// ->先转 '12,23' 再转为 NaN

parseInt();
parseFloat(); 