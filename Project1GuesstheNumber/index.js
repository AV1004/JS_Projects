console.log("Guess The Number");
console.log("");

let Num = Math.floor((Math.random() * 100) + 1);
let Guess;
let count = 0;

while (Guess != Num) {
  Guess = prompt("Enter your Guess");
  if (Guess > Num) {
    console.log("Your guess is grater then number!");
  }
  else if (Guess == Num) {
    console.log("Your guess is correct :)");
  }
  else {
    console.log("Your guess is smaller then number");
  }
  count++;
}

let round;
round = 100 - count;
console.log(round);
