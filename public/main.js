const die = document.querySelector("#die");
const buttons = document.querySelectorAll("#buttons button");

const die1 = document.createElement("img");
const die2 = document.createElement("img");
const die3 = document.createElement("img");
const die4 = document.createElement("img");
const die5 = document.createElement("img");
const die6 = document.createElement("img");

die1.src = "./img/Die 1.svg";
die2.src = "./img/Die 2.svg";
die3.src = "./img/Die 3.svg";
die4.src = "./img/Die 4.svg";
die5.src = "./img/Die 5.svg";
die6.src = "./img/Die 6.svg";

die1.classList.add("die1");
die2.classList.add("die2");
die3.classList.add("die3");
die4.classList.add("die4");
die5.classList.add("die5");
die6.classList.add("die6");

let numOfDice = die.children.length;

//* Dice Roll
function rollDice(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// for (let i = 0; i < 10; i++) console.log(`you rolled: ${rollDice(1, 6)}`);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.innerText === "-") {
      //* Remove a die, except for the last one
      if (die.lastChild.className !== "firstDie") {
        die.removeChild(die.lastChild);
      }
      numOfDice = die.children.length;
    } else if (this.innerText === "+") {
      //* Add up to 3 dice
      if (die.lastChild.className === "die2") {
        die.appendChild(die3);
        numOfDice = die.children.length;
        return;
      }
      if (die.lastChild.className === "die3") {
        return;
      }
      die.appendChild(die2);
      numOfDice = die.children.length;
    } else {
      //* Roll
      if (numOfDice === 1) {
        //* Roll if there's only one die
        let dieVal = rollDice(1, 6);
        if (dieVal === 6) {
          die.children[0].src = "./img/Die 6.svg";
          console.log("you rolled a 6");
        } else if (dieVal === 5) {
          die.children[0].src = "./img/Die 5.svg";
          console.log("you rolled a 5");
        } else if (dieVal === 4) {
          die.children[0].src = "./img/Die 4.svg";
          console.log("you rolled a 4");
        } else if (dieVal === 3) {
          die.children[0].src = "./img/Die 3.svg";
          console.log("you rolled a 3");
        } else if (dieVal === 2) {
          die.children[0].src = "./img/Die 2.svg";
          console.log("you rolled a 2");
        } else {
          die.children[0].src = "./img/Die 1.svg";
          console.log("you rolled a 1");
        }
      } else if (numOfDice === 2) {
        //* Roll if there's two dice
        let dieVal = rollDice(1, 6);
        if (dieVal === 6) {
          die.children[0].src = "./img/Die 6.svg";
          console.log("Die 1 rolled a 6");
        } else if (dieVal === 5) {
          die.children[0].src = "./img/Die 5.svg";
          console.log("Die 1 rolled a 5");
        } else if (dieVal === 4) {
          die.children[0].src = "./img/Die 4.svg";
          console.log("Die 1 rolled a 4");
        } else if (dieVal === 3) {
          die.children[0].src = "./img/Die 3.svg";
          console.log("Die 1 rolled a 3");
        } else if (dieVal === 2) {
          die.children[0].src = "./img/Die 2.svg";
          console.log("Die 1 rolled a 2");
        } else {
          die.children[0].src = "./img/Die 1.svg";
          console.log("Die 1 rolled a 1");
        }
        dieVal = rollDice(1, 6);
        if (dieVal === 6) {
          die.children[1].src = "./img/Die 6.svg";
          console.log("Die 2 rolled a 6");
        } else if (dieVal === 5) {
          die.children[1].src = "./img/Die 5.svg";
          console.log("Die 2 rolled a 5");
        } else if (dieVal === 4) {
          die.children[1].src = "./img/Die 4.svg";
          console.log("Die 2 rolled a 4");
        } else if (dieVal === 3) {
          die.children[1].src = "./img/Die 3.svg";
          console.log("Die 2 rolled a 3");
        } else if (dieVal === 2) {
          die.children[1].src = "./img/Die 2.svg";
          console.log("Die 2 rolled a 2");
        } else {
          die.children[1].src = "./img/Die 1.svg";
          console.log("Die 2 rolled a 1");
        }
      } else {
        //* Roll if there's three dice
        let dieVal = rollDice(1, 6);
        if (dieVal === 6) {
          die.children[0].src = "./img/Die 6.svg";
          console.log("Die 1 rolled a 6");
        } else if (dieVal === 5) {
          die.children[0].src = "./img/Die 5.svg";
          console.log("Die 1 rolled a 5");
        } else if (dieVal === 4) {
          die.children[0].src = "./img/Die 4.svg";
          console.log("Die 1 rolled a 4");
        } else if (dieVal === 3) {
          die.children[0].src = "./img/Die 3.svg";
          console.log("Die 1 rolled a 3");
        } else if (dieVal === 2) {
          die.children[0].src = "./img/Die 2.svg";
          console.log("Die 1 rolled a 2");
        } else {
          die.children[0].src = "./img/Die 1.svg";
          console.log("Die 1 rolled a 1");
        }

        dieVal = rollDice(1, 6);
        if (dieVal === 6) {
          die.children[1].src = "./img/Die 6.svg";
          console.log("Die 2 rolled a 6");
        } else if (dieVal === 5) {
          die.children[1].src = "./img/Die 5.svg";
          console.log("Die 2 rolled a 5");
        } else if (dieVal === 4) {
          die.children[1].src = "./img/Die 4.svg";
          console.log("Die 2 rolled a 4");
        } else if (dieVal === 3) {
          die.children[1].src = "./img/Die 3.svg";
          console.log("Die 2 rolled a 3");
        } else if (dieVal === 2) {
          die.children[1].src = "./img/Die 2.svg";
          console.log("Die 2 rolled a 2");
        } else {
          die.children[1].src = "./img/Die 1.svg";
          console.log("Die 2 rolled a 1");
        }

        dieVal = rollDice(1, 6);
        if (dieVal === 6) {
          die.children[2].src = "./img/Die 6.svg";
          console.log("Die 3 rolled a 6");
        } else if (dieVal === 5) {
          die.children[2].src = "./img/Die 5.svg";
          console.log("Die 3 rolled a 5");
        } else if (dieVal === 4) {
          die.children[2].src = "./img/Die 4.svg";
          console.log("Die 3 rolled a 4");
        } else if (dieVal === 3) {
          die.children[2].src = "./img/Die 3.svg";
          console.log("Die 3 rolled a 3");
        } else if (dieVal === 2) {
          die.children[2].src = "./img/Die 2.svg";
          console.log("Die 3 rolled a 2");
        } else {
          die.children[2].src = "./img/Die 1.svg";
          console.log("Die 3 rolled a 1");
        }
      }
    }
  });
});
