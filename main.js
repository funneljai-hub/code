function gold() {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
setCookie('background', 1, 30);
}
function blue() {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
setCookie('background', 2, 30);
}
function red() {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
setCookie('background', 3, 30);
}
function white() {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
setCookie('background', 4, 30);
}
function black() {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
setCookie('background', 0, 30);
}
function first() {
  document.body.write("hello this is my javascript");
}
document.cookie = "background=x";
function b() {
if (document.cookie.background=x) {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
}
if (document.cookie.background=2) {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
}
if (document.cookie.background=1) {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
}
if (document.cookie.background=3) {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
} 
if (document.cookie.background=4) {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
} 
alert(background);
}
