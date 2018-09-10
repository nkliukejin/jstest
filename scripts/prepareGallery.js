/**
 * Created by kejin on 2018/9/10.
 */

function prepareGallery() {

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");

    for(var i=0 ; i<links.length ; i++){
        links[i].onclick = function () {
            showPic(this);
            return false;
        }


       // links[i].onkeypress = links[i].onclick;
    }

}