function gold() {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
setCookie("background", gold, 30);
}
function blue() {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
setCookie("background", blue ,30);
}
function red() {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
setCookie("background", red, 30);
}
function white() {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
setCookie("background", white, 30);
}
function black() {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
setCookie("background", black, 30);
}
function first() {
  document.body.write("hello this is my javascript");
}

document.cookie = "background=x;";
function b() {
if ("background=black") {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
}
if ("background=blue") {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
alert("background=blue");
} 
if ("background=gold") {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
}
if ("background=red") {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
}
if ("background=white") {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
}
}
