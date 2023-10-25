function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
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
function b() {
if (background -1<0<1) {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
}
if (background 1<2<3) {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
}
if (background 0<1<2) {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
}
if (background 2<3<4) {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
} 
if (background 3<4<5) {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
} 
alert(background);
}
