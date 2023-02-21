const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let click = event.target;
  click.style.backgroundColor = click.className;
  cardActions(event);
}

// when the DOM loads
createDivsForColors(shuffledColors);

// keeps track of number of clicks and what to do with the cards
let clickCount = 0;
let click1;
let click2;
let target1;
let target2;
function cardActions(event){
  clickCount++;
  event.target.classList.add('clicked');
  if (clickCount === 1){
    click1 = JSON.stringify(event.target.classList);
    target1 = event.target;
  } else if (clickCount === 2){
    click2 = JSON.stringify(event.target.classList);
    target2 = event.target;
    if (target1 === target2){
      alert('Must click two different cards.');
      target1.classList.remove('clicked');
      target1.style.backgroundColor = 'white';
      target2.classList.remove('clicked');
      target2.style.backgroundColor = 'white';
    }
    if (click1 === click2){
      clickCount = 0;
    } else {
      clickCount = 0;
      setTimeout(function() {
        target1.classList.remove('clicked');
        target1.style.backgroundColor = 'white';
        target2.classList.remove('clicked');
        target2.style.backgroundColor = 'white';
      }, 1000);
    }
  }
}