function getCookie(cookieName) {
         let cookies = document.cookie;
         let cookieArray = cookies.split("; ");
      
         for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            let [name, value] = cookie.split("=");
           
            if (name === cookieName) {
               return decodeURIComponent(value);
            }
         }
         
         return null;
      }
function gold() {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
document.cookie = "background=1";
}
function blue() {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
document.cookie = "background=2";
}
function red() {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
document.cookie = "background=3";
}
function white() {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
document.cookie = "background=4";
}
function black() {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
document.cookie = "background=0";
}
function first() {
  document.body.write("hello this is my javascript");
}
let background = getCookie("background");
function b() {
if (background == 0) {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
}
if (background == 2) {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
}
if (background == 1) {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
}
if (background == 3) {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
} 
if (background == 4) {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
} 
alert(background);
}
