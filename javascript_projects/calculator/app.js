const entryBox = document.getElementById("entry")

let prevValue = "";
let newValue = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let valMemStored = "";

function numButPress(num) {
  if(resultVal) {
    newValue = num;
    resultVal = "";
  } else {
    if(num === '.') {
      if(!decimalClicked) {
        newValue += num;
        decimalClicked = true;
      }
    } else {
      newValue += num;
    }
  }
  entryBox.value = newValue;
}

function mathButPress(operator) {
  if(!resultVal) {
    prevValue = newValue;
  } else {
    prevValue = resultVal;
  }
  newValue = "";
  decimalClicked = false;
  mathOperator = operator;
  resultVal = "";
  entryBox.value = "";
}

function equalButPress() {
  decimalClicked = false;
  prevValue = parseFloat(prevValue);
  newValue = parseFloat(newValue);

  switch(mathOperator) {
    case '+':
      resultVal = prevValue + newValue;
      break;
    case '-':
      resultVal = prevValue - newValue;
      break;
    case '*':
      resultVal = prevValue * newValue;
      break;
    case '/':
      resultVal = prevValue / newValue;
      break;
    default:
      resultVal = newValue;
  }
  prevValue = resultVal;
  newValue = "";
  entryBox.value = resultVal;
}

function clearButPress() {
  prevValue = "";
  newValue = "";
  resultVal = "";
  mathOperator = "";
  decimalClicked = false;
  entryBox.value = 0;
}

function copyButPress() {
  valMemStored = entryBoxValue;
}

function pasteButPress() {
  if(valMemStored) {
    entryBox.value = valMemStored;
    newValue = valMemStored;
  }
}
