// Put all your JavaScript in this file!
function alertMe(object) {
    var color=prompt("CHOSE A COLOR");
    object.style.backgroundColor = color;
    var b=document.getElementsByTagName("body");
    b[0].style.backgroundColor = color;
}
