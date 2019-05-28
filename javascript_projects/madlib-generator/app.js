const outputTextArea = document.getElementById("output1");

function calcPI(iterations) {
  let pi = 0, divisor = 1;
  for(let i = 0; i <= iterations; ++i) {
    pi += 4/divisor - 4/(divisor+2);
    divisor += 4;
  }
  outputTextArea.value = pi.toFixed(10);
}

function getFibList(iterations) {
  let a = 1, b = 1, result = 0;
  for(let i = 2; i < iterations; ++i) {
    result = a + b;
    [a, b] = [b, result];
  }
  outputTextArea.value = result;
}

let madLibText = "My dear old ~ sat me down to hear some word of wisdom\n" +
                 "1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forver\n" +
                 "2. He who ~ at the right time can ~ again.\n" +
                 "3. Always wear ~ ~ in case you're in a ~ \n" +
                 "4. Don't use your ~ to wipe your ~ . Always have a clean ~ with you.";

let madLibArray = madLibText.split(" ");

let inputArray = [];

function madLibGenerator() {
  createInputArray();
  if(checkForMissingInput()) {
    outputTextArea.value = "Please enter all the values above.";
  } else {
    createMadlibSentence();
  }
}

function createInputArray() {
  for(let i = 0; i <=13 ; ++i) {
    inputArray[i] = document.getElementById("i" + i).value;
  }
}

function checkForMissingInput() {
  for(let i = 0; i <= 13; ++i) {
    if(inputArray[i] === undefined || inputArray[i] === null) {
      return true;
    }
  }
  return false;
}

function createMadlibSentence() {
  let arrayIndex = 0;
  for(let i = 0; i < madLibArray.length; ++i) {
    if(madLibArray[i] === "~") {
      madLibArray[i] = inputArray[arrayIndex];
      ++arrayIndex;
    }
  }
  outputTextArea.value = madLibArray.join(" ");
}
