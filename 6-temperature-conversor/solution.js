let temperatureType = prompt(
  "Pick a temperature choose either [c]elsius or [f]ahrenheit"
);
temperatureType.toLowerCase();

if (temperatureType === "c" || temperatureType === "f") {
  let temperature = prompt(
    "What degree should I convert. Decimal values need to be separated with a '.'"
  );

  temperature = Number(temperature);

  if (Number.isNaN(temperature)) {
    alert(
      "Try again you've typed in a wrong letter or used the , instead of ."
    );
  } else if (typeof temperature === "number") {
    switch (temperatureType) {
      case "c":
        let fahrenheit = (temperature - 32) / 1.8;
        alert(fahrenheit);
        break;
      case "f":
        let celsius = temperature * 1.8 + 32;
        alert(celsius);
        break;
    }
  } else {
    alert("The temperature was not a valid number, try again");
  }
} else {
  alert("Sorry but I don't know that temperature type yet. Type in c or f");
}
