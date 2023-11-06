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
//backgrounds
function gold() {
document.body.style.backgroundImage = "url('assets/img/bgGold.jpg')";
document.cookie = "background=1; path=/";
}
function blue() {
document.body.style.backgroundImage = "url('assets/img/bgBlue.jpg')";
document.cookie = "background=2; path=/";
}
function red() {
document.body.style.backgroundImage = "url('assets/img/bgRed.jpg')";
document.cookie = "background=3; path=/";
}
function white() {
document.body.style.backgroundImage = "url('assets/img/bgWhite.jpg')";
document.cookie = "background=4; path=/";
}
function black() {
document.body.style.backgroundImage = "url('assets/img/bgBlack.jpg')";
document.cookie = "background=0; path=/";
}

//langs
function EN() {
document.getElementById("home").innerHTML = "Home";
document.getElementById("ls").innerHTML = "links";
document.getElementById("ms").innerHTML = "mods";
document.getElementById("ws").innerHTML = "websites";
document.getElementById("bg").innerHTML = "backgrounds";
document.getElementById("gd").innerHTML = "gold";
document.getElementById("be").innerHTML = "blue";
document.getElementById("rd").innerHTML = "red";
document.getElementById("we").innerHTML = "white";
document.getElementById("bk").innerHTML = "black";
document.getElementById("lg").innerHTML = "lang";
document.getElementById("en").innerHTML = "EN";
document.getElementById("es").innerHTML = "ES";
document.getElementById("jp").innerHTML = "JP";
document.getElementById("h1").innerHTML = "This is the hub for mods made for Minecraft Bedrock Edition and website remakes by Funneljai";
document.cookie = "lang=0; path=/";
}
function ES() {
document.getElementById("home").innerHTML = "Hogar";
document.getElementById("ls").innerHTML = "Enlaces";
document.getElementById("ms").innerHTML = "modificaciones";
document.getElementById("ws").innerHTML = "sitios web";
document.getElementById("bg").innerHTML = "antecedentes";
document.getElementById("gd").innerHTML = "oro";
document.getElementById("be").innerHTML = "azul";
document.getElementById("rd").innerHTML = "rojo";
document.getElementById("we").innerHTML = "balco";
document.getElementById("bk").innerHTML = "negro";
document.getElementById("lg").innerHTML = "idioma";
document.getElementById("en").innerHTML = "Inglés";
document.getElementById("es").innerHTML = "Español";
document.getElementById("jp").innerHTML = "Japonés";
document.getElementById("h1").innerHTML = "Este es el centro de modificaciones realizadas para Minecraft Bedrock Edition y remakes de sitios web de Funneljai.";
document.cookie = "lang=1; path=/";
}
function JP() {
document.getElementById("home").innerHTML = "自宅";
document.getElementById("ls").innerHTML = "自宅";
document.getElementById("ms").innerHTML = "改造";
document.getElementById("ws").innerHTML = "ウェブサイト";
document.getElementById("bg").innerHTML = "バックグラウンド";
document.getElementById("gd").innerHTML = "黄金";
document.getElementById("be").innerHTML = "ブルー";
document.getElementById("rd").innerHTML = "赤色";
document.getElementById("we").innerHTML = "ホワイト";
document.getElementById("bk").innerHTML = "ブラック";
document.getElementById("lg").innerHTML = "ラング";
document.getElementById("en").innerHTML = "英語";
document.getElementById("es").innerHTML = "スペイン語";
document.getElementById("jp").innerHTML = "日本人";
document.getElementById("h1").innerHTML = "これは、マインクラフト 岩盤 版 用に作成された 改造 と、ファンネルジャイ によってリメイクされた ウェブ サイトのハブです。";
document.cookie = "lang=2; path=/";
}
function eng() {
document.getElementById("home").innerHTML = "Home";
document.getElementById("ls").innerHTML = "links";
document.getElementById("ms").innerHTML = "mods";
document.getElementById("ws").innerHTML = "websites";
document.getElementById("bg").innerHTML = "backgrounds";
document.getElementById("gd").innerHTML = "gold";
document.getElementById("be").innerHTML = "blue";
document.getElementById("rd").innerHTML = "red";
document.getElementById("we").innerHTML = "white";
document.getElementById("bk").innerHTML = "black";
document.getElementById("lg").innerHTML = "lang";
document.getElementById("en").innerHTML = "EN";
document.getElementById("es").innerHTML = "ES";
document.getElementById("jp").innerHTML = "JP";
document.getElementById("h1").innerHTML = "This is the hub for mods made for Minecraft Bedrock Edition and website remakes by Funneljai";
}
function esp() {
document.getElementById("home").innerHTML = "Hogar";
document.getElementById("ls").innerHTML = "Enlaces";
document.getElementById("ms").innerHTML = "modificaciones";
document.getElementById("ws").innerHTML = "sitios web";
document.getElementById("bg").innerHTML = "antecedentes";
document.getElementById("gd").innerHTML = "oro";
document.getElementById("be").innerHTML = "azul";
document.getElementById("rd").innerHTML = "rojo";
document.getElementById("we").innerHTML = "balco";
document.getElementById("bk").innerHTML = "negro";
document.getElementById("lg").innerHTML = "idioma";
document.getElementById("en").innerHTML = "Inglés";
document.getElementById("es").innerHTML = "Español";
document.getElementById("jp").innerHTML = "Japonés";
document.getElementById("h1").innerHTML = "Este es el centro de modificaciones realizadas para Minecraft Bedrock Edition y remakes de sitios web de Funneljai.";
}
function jap() {
document.getElementById("home").innerHTML = "自宅";
document.getElementById("ls").innerHTML = "自宅";
document.getElementById("ms").innerHTML = "改造";
document.getElementById("ws").innerHTML = "ウェブサイト";
document.getElementById("bg").innerHTML = "バックグラウンド";
document.getElementById("gd").innerHTML = "黄金";
document.getElementById("be").innerHTML = "ブルー";
document.getElementById("rd").innerHTML = "赤色";
document.getElementById("we").innerHTML = "ホワイト";
document.getElementById("bk").innerHTML = "ブラック";
document.getElementById("lg").innerHTML = "ラング";
document.getElementById("en").innerHTML = "英語";
document.getElementById("es").innerHTML = "スペイン語";
document.getElementById("jp").innerHTML = "日本人";
document.getElementById("h1").innerHTML = "これは、マインクラフト 岩盤 版 用に作成された 改造 と、ファンネルジャイ によってリメイクされた ウェブ サイトのハブです。";
}

let background = getCookie("background");
let lang = getCookie("lang");
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
if (lang == 0) {
EN();
}
if (lang == 1) {
ES();
}
if (lang == 2) {
JP(); 
}
console.log(lang);
console.log(background);
}

