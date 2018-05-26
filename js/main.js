function navFunction() {
    var x = document.getElementById("nav");
    if (x.className === "navs") {
        x.className += " responsive";
    } else {
        x.className = "navs";
    }
}