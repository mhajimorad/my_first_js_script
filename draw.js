console.log("pet script running")

var myColor = '#c0392b';

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var img1 = new Image();   // Create new img element
img1.onload = function(){
    
}
img1.src = "https://cdn.glitch.com/e03eb408-5bfa-4bd1-b4ef-7ac44ed9b7be%2Fdraw_the_view.jpg?v=1620008314547"; // Set source path

var img2 = new Image();   // Create new img element
img2.onload = function(){
    
}
img2.src = "https://cdn.glitch.com/e03eb408-5bfa-4bd1-b4ef-7ac44ed9b7be%2Fwhats_under_sea.jpg?v=1620008235647"; // Set source path

var img3 = new Image();   // Create new img element
img3.onload = function(){
    
}
img3.src = "https://cdn.glitch.com/e03eb408-5bfa-4bd1-b4ef-7ac44ed9b7be%2Fwho_lives_in_garden.jpg?v=1620008680038"; // Set source path

var img4 = new Image();   // Create new img element
img4.onload = function(){
    
}
img4.src = "https://cdn.glitch.com/e03eb408-5bfa-4bd1-b4ef-7ac44ed9b7be%2Fwhats_happening_space.jpg?v=1620008683626"; // Set source path


// ******************************************************************************************************************
// lines 36 through 66 were found/researched online, in order to learn about code that allows the mouse to be tracked

// last known position
var pos = { x: 0, y: 0 };

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}



function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = myColor;

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

// ***********************************************************************************************************************

var myButton1 = document.getElementById("button1");
// console.log(myButton1)
myButton1.addEventListener('click', fxnClickButton1);

function fxnClickButton1() {
  
  c.width = img1.width;
  c.height = img1.height;
  ctx.drawImage(img1, 0, 0);
}

var myButton2 = document.getElementById("button2");
// console.log(myButton1)
myButton2.addEventListener('click', fxnClickButton2);

function fxnClickButton2() {
  
  
  c.width = img2.width;
  c.height = img2.height;
  ctx.drawImage(img2, 0, 0);
}


var myButton3 = document.getElementById("button3");
// console.log(myButton1)
myButton3.addEventListener('click', fxnClickButton3);

function fxnClickButton3() {
  
  c.width = img3.width;
  c.height = img3.height;
  ctx.drawImage(img3, 0, 0);
}




var myButton4 = document.getElementById("button4");
// console.log(myButton1)
myButton4.addEventListener('click', fxnClickButton4);

function fxnClickButton4() {
  
  c.width = img4.width;
  c.height = img4.height;
  ctx.drawImage(img4, 0, 0);
}




var myButton5 = document.getElementById("colorChange");
// console.log(myButton1)
myButton5.addEventListener('click', fxnClickButton5);

function fxnClickButton5() {
  
  myColor = "#"+((1<<24)*Math.random()|0).toString(16);
  ctx.strokeStyle = myColor;
}
