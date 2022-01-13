const myarray = [];
var colored1 = false;
var colored2 = false;
var colored3 = false;
var colored4 = false;
var runde = 2;
var checkThisWithSelected = 0;
var buttonpressed = 0;


generatenumbers();
displayButtons(1);

function checkbutton(selectednumber) {
  checkThisWithSelected++;

  if(selectednumber==myarray[checkThisWithSelected]){
    if(checkThisWithSelected==runde-1){

      displayButtons(1);
      checkThisWithSelected = 0;
      runde++;
      generatenumbers();
      buttonpressed = 0;
      console.log(myarray+"win");
    }
  }
  else{

    checkThisWithSelected = 0;
    runde = 2;
    buttonpressed = 0;
    myarray.length = 0;
    console.log(myarray+"loss");
    generatenumbers();
    displayButtons(1);


  }

}


function removeclass(number){
  document.getElementById("button" + number).classList.remove("button" + number);
}
function addclass(number){
  document.getElementById("button" + number).classList.add("button" + number);
}

function generatenumbers() {
  while(myarray.length<runde){
    myarray.push(Math.floor(Math.random() * 4) + 1);
  }
}
function displayButtons(myDigitPosition){
  removeclass(myarray[myDigitPosition-1]);
  setTimeout(addclass, 250, myarray[myDigitPosition]);
  setTimeout(displayButtons, 500, myDigitPosition+1);
}



document.getElementById("button1").addEventListener("click", function () {
  checkbutton(1);
});
document.getElementById("button2").addEventListener("click", function () {
  checkbutton(2);
});
document.getElementById("button3").addEventListener("click", function () {
  checkbutton(3);
});
document.getElementById("button4").addEventListener("click", function () {
  checkbutton(4);
});
