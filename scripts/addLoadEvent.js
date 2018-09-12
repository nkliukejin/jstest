/**
 * Created by kejin on 2018/9/10.
 * 绑定多个函数到 onload上
 */
function addLoadEvent(func) {
    var oldonload = window.onload;

    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}