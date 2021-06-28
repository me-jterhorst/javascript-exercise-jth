let number = parseInt(prompt("Tell me your favourite number"));
let sumatory = 0;

if (number < 0) {
  alert(
    "the number given was negative and that you can't calculate the sumatory for that"
  );
} else {
  for (let i = number; i > 0; i--) {
    sumatory = sumatory + i;
  }
}

alert(sumatory);
