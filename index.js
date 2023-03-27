"use strict";

// styling and planning. this is irrelevant
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
$("button").css("width", "5rem");
$("button").css("height", "1.5rem");
$("button").text("convert!");
$("textarea").css("font-size", "3rem");
var uppercases = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// code

$("button").on("click", function () {
  const text = $("textarea").val().split("\n");
  console.log(
    `You inserted ${text.length} words. Here is their camelCase conversion: `
  );
  var checkMarkCounter = 1;
  for (const word of text.values()) {
    const underscorePosition = word.indexOf("_");
    const letterToChange = word[underscorePosition + 1];
    const changedLetter = letterToChange.toUpperCase();

    var firstPart = word.slice(0, underscorePosition); //part before the underscore
    var secondPart = word.slice(underscorePosition + 1, word.length); //part after the underscore

    //checking the FIRST part for upperCases

    for (let i = 0; i <= firstPart.length; i++) {
      for (let j = 0; j < uppercases.length; j++) {
        if (firstPart[i] === uppercases[j]) {
          const wrongLetter = uppercases[j];
          const convertedLetter = firstPart[i].toLowerCase();
          firstPart = firstPart.replace(wrongLetter, convertedLetter);
        }
      }
    }

    //checking the SECOND part for upperCases

    for (let i = 1; i <= secondPart.length; i++) {
      for (let j = 0; j < uppercases.length; j++) {
        if (secondPart[i] === uppercases[j]) {
          const wrongLetter = uppercases[j];
          const convertedLetter = secondPart[i].toLowerCase();
          secondPart = secondPart.replace(wrongLetter, convertedLetter);
        }
      }
    }
    const replaceLetter = secondPart.replace(letterToChange, changedLetter);

    const correctWord = firstPart + replaceLetter;

    console.log(correctWord + "✅".repeat(checkMarkCounter));
    checkMarkCounter = checkMarkCounter + 1;
  }
});
