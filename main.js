
function gold() {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
document.cookie ="background=1;path=/main/";
}
function blue() {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
document.cookie ="background=2;path=/main/";
}
function red() {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
document.cookie ="background=3;path=/main/";
}
function white() {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
document.cookie ="background=4;path=/main/";
}
function black() {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
document.cookie ="background=0;path=/main/";
}
function first() {
  document.body.write("hello this is my javascript");
}
document.cookie ="background=x"
function b() {
if (background == 0) {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
}
if (background ==2) {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
}
if (background ==1) {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
}
if (background ==3) {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
} 
if (background == 4) {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
} 
alert(background);
}
