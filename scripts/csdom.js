/**
 * Created by kejin on 2018/9/10.
 */
var paras = document.getElementsByTagName("p");
for(var i=0 ; i<paras.length ; i++){
    paras[i].onclick = function () {
        alert("You Click!");
    }
}