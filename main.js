function gold() {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
setCookie("gold", user, 30);
}
function blue() {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
setCookie("background", 1 ,30);
}
function red() {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
setCookie("red", user, 30);
}
function white() {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
setCookie("white", user, 30);
}
function black() {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
setCookie("black", user, 30);
}
function first() {
  document.body.write("hello this is my javascript");
}

document.cookie = "background=x;";
function b() {
if (background=1) {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
} else {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
}
}
