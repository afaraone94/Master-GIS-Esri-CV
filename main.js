window.addEventListener('load', function () {

    var buttonElements = document.getElementsByTagName("button");
    var buttonNode;
    for (var i = 0; i < buttonElements.length; i++) {
        buttonNode = buttonElements[i];
        buttonNode.addEventListener("click", function () {
            change(this)
        });
    }

    function change(e) {
        var button = e; 
        if (button.getAttribute("class") == "mas") {
            button.setAttribute("class", "menos");
        } else {
            button.setAttribute("class", "mas");
        }
        if (button.nextElementSibling.getAttribute("class") == "close") {
            button.nextElementSibling.setAttribute("class", "open");
        } else {
            button.nextElementSibling.setAttribute("class", "close");
        }
    }
});