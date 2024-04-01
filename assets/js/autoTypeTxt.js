window.onload = () => { 
   autoType1();
   autoType2();
   autoType3();
};

var index1 = 0;
var text1 = "Hello world !";
var speed1 = 100;
function autoType1() {
  if (index1 < text1.length) {
    document.querySelector("#auto-typed-text1").textContent += text1.charAt(index1);
    index1++;
    setTimeout( autoType1,speed1);
  }
}

var index2=0;
var text2 = "HTML5, CSS3 & JavaScript developer";
var speed2 = 200;
function autoType2() {
  if (index2 < text2.length) {
    document.querySelector("#auto-typed-text2").textContent += text2.charAt(index2);
    index2++;
    setTimeout(autoType2, speed2);
  }
}

// var index3=0;
// var text3 = "full stack developer";
// var speed3 = 250;
// function autoType3() {
//   if (index3 < text3.length) {
//     document.querySelector("#auto-typed-text3").textContent += text3.charAt(index3);
//     index3++;
//     setTimeout( autoType3,speed3);
//   }
// }

var btnHeartBeat = document.getElementsByTagName("button");
btnHeartBeat[0].addEventListener("mouseover", stopBeating);

function stopBeating() {
  var btnClasList=btnHeartBeat[0].classList;
  for (let index = 0; index < btnClasList.length; index++) {
    if (btnClasList[index]==="heartbeat") {
      btnHeartBeat[0].classList.remove("heartbeat");
    }
  }
}

btnHeartBeat[0].addEventListener("mouseout", keepBeating);

function keepBeating() {
  var btnClasList = btnHeartBeat[0].classList;
  for (let index = 0; index < btnClasList.length; index++) {
    if (btnClasList[index]!=="heartbeat") {
      btnHeartBeat[0].classList.add("heartbeat");
    }
  }
}