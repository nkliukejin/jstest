//show picture and title in placeholder.
function showPic(whichpic) {
    // 检查html 文档中是否有该标签
    if(!document.getElementById("placeholder")){
        return false;
    }

    //picture
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    //检查 html 是否有 description
    if(document.getElementById("titleholder")){
        //title
        var text = whichpic.getAttribute("title");
        var titledescription = document.getElementById("titleholder");
        titleholder.childNodes[0].nodeValue = text;
        //titleholder.firstChild.nodeValue = text; //与上一句同义；

    }
    return true;
}