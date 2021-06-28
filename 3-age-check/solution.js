alert("Hey, Thank you for visiting");
let firstname = prompt("Can you tell me your name?");
let birthYear = prompt("What year have you been born in?", 2021);
console.log(birthYear);

let age = 2021 - birthYear;

if (age < 10) {
  alert(
    `You are too young for this ${firstname} Come back when you are older.`
  );
} else if (age > 10 && age < 18) {
  let adultNear = confirm("Are you next to an adult?");

  if (adultNear) {
    alert(
      `Welcome to my super website ${firstname}. Good, that you are not alone here!`
    );
  } else {
    alert(
      `You are too young for this ${firstname}. You need an adult next to you to continue.`
    );
  }
} else if (age === 31) {
  alert(`Welcome to my super website ${firstname} We are the same age!`);
} else {
  alert(`Welcome to my super website ${firstname}`);
}
