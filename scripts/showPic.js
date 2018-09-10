//show picture and title in placeholder.
function showPic(whichpic) {
    //picture
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    //title
    var text = whichpic.getAttribute("title");
    var titledescription = document.getElementById("titleholder");
    titleholder.childNodes[0].nodeValue = text;
    //titleholder.firstChild.nodeValue = text; //与上一句同义；
    


}