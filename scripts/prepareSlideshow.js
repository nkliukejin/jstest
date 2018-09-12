/**
 * Created by kejin on 2018/9/12.
 */

function prepareSlideshow() {

    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";

    // 取得列表中的所有链接
    var list = document.getElementById("linklist");
    var links = document.getElementsByTagName("a");

    // 为mouseover 事件添加动画效果
    links[0].onmouseover = function () {
        moveElement("preview" , -100 , 0 , 10);
    }
    links[1].onmouseover = function () {
        moveElement("preview" , -200 , 0 , 10);
    }
    links[2].onmouseover = function () {
        moveElement("preview" , -300 , 0 , 10);
    }



}

addLoadEvent(prepareSlideshow);