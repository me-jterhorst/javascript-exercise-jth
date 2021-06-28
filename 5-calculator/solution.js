let operation = prompt(
  "What operation you want to do? [+, -, /, *] Type 'exit' or cancel to finish"
);

while (operation !== "exit" && operation !== null) {
  let numberOne = Number(prompt("What is your first number"));
  let numberTwo = Number(prompt("What is your second number"));

  switch (operation) {
    case "+":
      alert(numberOne + numberTwo);
      break;
    case "-":
      alert(numberOne - numberTwo);
      break;
    case "/":
      alert(numberOne / numberTwo);
      break;
    case "*":
      alert(numberOne * numberTwo);
      break;
  }
  operation = prompt(
    "What operation you want to do? [+, -, /, *] Type 'exit' or cancel to finish"
  );
}

alert("You've stopped the calculation");
