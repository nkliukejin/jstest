/**
 * Created by kejin on 2018/9/12.
 */

function setPosition() {
    // 检查浏览器是否支持DOM
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;

    var elem = document.getElementById("message");
    elem.style.position = "absolute" ;
    elem.style.left = "50px";
    elem.style.top = "100px";

    /* movement是全局变量，在setPosition 函数外也可以调用
    movement = setTimeout("movePosition()",3000);
    */

    moveElement("message",200,200,10);
    // setTimeout使用clearTimeout 函数撤销

}

/*
// 一次移动元素的weizhi
function movePosition() {
    var elem = document.getElementById("message");
    elem.style.left = "200px";
}
*/

/*
// 渐变移动元素的位置
function movePosition() {

    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    // 判断元素是否达到目的位置
    if(200 == xpos && 100 == ypos){
        return true;
    }

    // 逐步移动
    if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }

    if(ypos < 100){
        ypos++;
    }
    if(ypos > 100){
        ypos--;
    }

    elem.style.left = xpos +"px";
    elem.style.top = ypos+"px";

    movement = setTimeout("movePosition()",10);

}

*/



addLoadEvent(setPosition);