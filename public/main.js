const die = document.querySelector("#die");
const buttons = document.querySelectorAll("#buttons button");
const roll = document.querySelector("#roll button");
const total = document.querySelector("#total");

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

let numOfDice = die.children.length;

//* Dice Roll
function rollDice(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// for (let i = 0; i < 10; i++) console.log(`you rolled: ${rollDice(1, 6)}`);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.innerText === "1 Die") {
      die.innerHTML = "";

      die.appendChild(die1);
      numOfDice = 1;
    } else if (this.innerText === "2 Dice") {
      die.innerHTML = "";

      die.appendChild(die1);
      die.appendChild(die2);
      numOfDice = 2;
    } else {
      die.innerHTML = "";

      die.appendChild(die1);
      die.appendChild(die2);
      die.appendChild(die3);
      numOfDice = 3;
    }
  });
});

roll.addEventListener("click", () => {
  if (numOfDice === 1) {
    //* Roll if there's only one die
    let dieVal = rollDice(1, 6);
    totalVal = dieVal;
    if (dieVal === 6) {
      die.children[0].src = "./img/Die 6.svg";
    } else if (dieVal === 5) {
      die.children[0].src = "./img/Die 5.svg";
    } else if (dieVal === 4) {
      die.children[0].src = "./img/Die 4.svg";
    } else if (dieVal === 3) {
      die.children[0].src = "./img/Die 3.svg";
    } else if (dieVal === 2) {
      die.children[0].src = "./img/Die 2.svg";
    } else {
      die.children[0].src = "./img/Die 1.svg";
    }

    total.innerText = `Total: ${totalVal}`;
  } else if (numOfDice === 2) {
    //* Roll if there's two dice
    let dieVal = rollDice(1, 6);
    let totalVal1 = dieVal;

    if (dieVal === 6) {
      die.children[0].src = "./img/Die 6.svg";
    } else if (dieVal === 5) {
      die.children[0].src = "./img/Die 5.svg";
    } else if (dieVal === 4) {
      die.children[0].src = "./img/Die 4.svg";
    } else if (dieVal === 3) {
      die.children[0].src = "./img/Die 3.svg";
    } else if (dieVal === 2) {
      die.children[0].src = "./img/Die 2.svg";
    } else {
      die.children[0].src = "./img/Die 1.svg";
    }
    dieVal = rollDice(1, 6);
    let totalVal2 = dieVal;

    console.log(`die 2 value: ${dieVal}`);
    if (dieVal === 6) {
      die.children[1].src = "./img/Die 6.svg";
    } else if (dieVal === 5) {
      die.children[1].src = "./img/Die 5.svg";
    } else if (dieVal === 4) {
      die.children[1].src = "./img/Die 4.svg";
    } else if (dieVal === 3) {
      die.children[1].src = "./img/Die 3.svg";
    } else if (dieVal === 2) {
      die.children[1].src = "./img/Die 2.svg";
    } else {
      die.children[1].src = "./img/Die 1.svg";
    }

    total.innerText = `Total: ${totalVal1 + totalVal2}`;
  } else {
    //* Roll if there's three dice
    let dieVal = rollDice(1, 6);
    let totalVal1 = dieVal;

    if (dieVal === 6) {
      die.children[0].src = "./img/Die 6.svg";
    } else if (dieVal === 5) {
      die.children[0].src = "./img/Die 5.svg";
    } else if (dieVal === 4) {
      die.children[0].src = "./img/Die 4.svg";
    } else if (dieVal === 3) {
      die.children[0].src = "./img/Die 3.svg";
    } else if (dieVal === 2) {
      die.children[0].src = "./img/Die 2.svg";
    } else {
      die.children[0].src = "./img/Die 1.svg";
    }

    dieVal = rollDice(1, 6);
    let totalVal2 = dieVal;

    if (dieVal === 6) {
      die.children[1].src = "./img/Die 6.svg";
    } else if (dieVal === 5) {
      die.children[1].src = "./img/Die 5.svg";
    } else if (dieVal === 4) {
      die.children[1].src = "./img/Die 4.svg";
    } else if (dieVal === 3) {
      die.children[1].src = "./img/Die 3.svg";
    } else if (dieVal === 2) {
      die.children[1].src = "./img/Die 2.svg";
    } else {
      die.children[1].src = "./img/Die 1.svg";
    }

    dieVal = rollDice(1, 6);
    let totalVal3 = dieVal;

    if (dieVal === 6) {
      die.children[2].src = "./img/Die 6.svg";
    } else if (dieVal === 5) {
      die.children[2].src = "./img/Die 5.svg";
    } else if (dieVal === 4) {
      die.children[2].src = "./img/Die 4.svg";
    } else if (dieVal === 3) {
      die.children[2].src = "./img/Die 3.svg";
    } else if (dieVal === 2) {
      die.children[2].src = "./img/Die 2.svg";
    } else {
      die.children[2].src = "./img/Die 1.svg";
    }

    total.innerText = `Total: ${totalVal1 + totalVal2 + totalVal3}`;
  }
});
