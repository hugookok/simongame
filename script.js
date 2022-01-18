const NUMBERRANGE = 4; // constant used for calculating numbers within the range of tiles

const myarray = [];
var colored1 = false;
var colored2 = false;
var colored3 = false;
var colored4 = false;
var runde = 1;
var checkThisWithSelected = 0;
var buttonpressed = 0;

generatenumbers();
displayButtons(0);


function checkbutton(selectednumber) {
  console.log('checking if number match..', selectednumber == myarray[checkThisWithSelected]);
  if(selectednumber==myarray[checkThisWithSelected]){

    checkThisWithSelected++;
    if(checkThisWithSelected >= myarray.length){
      runde++;
      generatenumbers();
      displayButtons(0);
      checkThisWithSelected = 0;
      buttonpressed = 0;
      console.log(myarray+" win");
    }
  } else {
    checkThisWithSelected = 0;
    runde = 1;
    buttonpressed = 0;
    myarray.length = 0;
    console.log(myarray+" loss");
    generatenumbers();
    displayButtons(0);
  }

}

function removeclass(number){
  console.log(number);
  const button = document.getElementById(number);
  console.log(button, 'removeclass');
  button.classList.remove("button" + number);
}

function addclass(number){
  const button = document.getElementById(number);
  console.log(button, 'addclass');
  button.classList.add("button" + number);
}

function generatenumbers() {
  while(myarray.length<runde){
    myarray.push(Math.floor(Math.random() * NUMBERRANGE) + 1);
  }
  console.log('generating myarray', myarray);
}

function displayButtons(myDigitPosition){

  addclass(myarray[myDigitPosition]);
  setTimeout(removeclass, 250, myarray[myDigitPosition]);

  if(++myDigitPosition < myarray.length){ 
    setTimeout(displayButtons, 500, myDigitPosition);
  }

}

const buttonArray = document.getElementById('positionbuttons');


buttonArray.addEventListener('click', function (event){
  const buttonId = event.target.id;
  console.log('click', buttonId);
  checkbutton(buttonId);
});

