/**
 * Created by kejin on 2018/9/12.
 * parameters:  elementID   要移动的元素的id值
 *              final_x     目标位置的x坐标
 *              final_y     目标位置的y坐标
 *              interval    运动时间间隔
 *
 * remarks:     x方向和y方向的移动速度一样，若x，y的移动距离不一样，则会有一段距离的水平或者竖直移动
 *
 */

function moveElement(elementID , final_x ,final_y , interval) {

    // 检查浏览器是否支持DOM
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;

    var elem = document.getElementById(elementID);

    // 防止动画快速切换的时候显示混乱
    if(elem.movement){
        clearTimeout(elem.movement);
    }

    // 检查元素位置是否已经被设置
    if(!elem.style.left){
        elem.style.left = "0px"
    }
    if(!elem.style.top){
        elem.style.top = "0px"
    }

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;

    // 判断元素是否达到目的位置
    if(final_x == xpos && final_y == ypos){
        return true;
    }

    // 逐步移动
    if(xpos < final_x){
        dist = Math.ceil((final_x - xpos)/10);
        xpos += dist;
    }
    if(xpos > final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos -= dist;
    }

    if(ypos < final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos += dist;
    }
    if(ypos > final_y){
        dist = Math.ceil((xpos - final_y)/10);
        ypos -= dist;
    }

    elem.style.left = xpos +"px";
    elem.style.top = ypos+"px";

    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    //alert(repeat);
    // 函数moveElement() 在调用的时候是以字符串的形式出现在setTimeout函数的参数中的
    elem.movement = setTimeout(repeat,interval);

}

