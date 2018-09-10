
    window.onload = prepareLinks;

    function prepareLinks() {
        var links = document.getElementById("a");
        for (var i = 0; i < links.length; i++) {
            if (links[i].getAttribute("class") == "popup") {
                links[i].onclick = function () {
                    popUp(this.getAttribute("href"));
                    return false;
                }
            }
        }
    }
    <!--打开新页面的JavaScript-->
    function popUp(winURL) {
        window.open(winURL,"popup","width=320,height=480");
    }
