// 7.45
// holds the JSON data from the textarea
let data;
// holds array of expenditure objects
let expendituresArray = [];
// holds array of percentages to be drawn for pie chart
let percentArray = [];
// hold the randomly generated color hexcodes
let colorArray = [];

function drawChart() {
  // get data from textarea
  data = document.getElementById('json-data').value;
  // convert JSON data into array of objects
  populateArray(data);
  // arrays extracted from expenditures array
  percentArray = createPercentArray();
  colorArray = createRandomColorArray();

  drawPie();
}

function populateArray(jsonData) {
  let expenseArray = JSON.parse(jsonData);
  for(let i = 0; i < expenseArray.expenditures.length; i++) {
    expendituresArray[i] = expenseArray.expenditures[i];
  }
}

function createPercentArray() {
  let perArr = [];
  for(let i = 0; i < expendituresArray.length; i++) {
    perArr[i] = expendituresArray[i].percent * 0.02;
  }
  return perArr;
}

function createRandomColorArray() {
  let colorArr = [];
  for(let i = 0; i < expendituresArray.length; i++) {
    colorArr[i] = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  return colorArr;
}

function drawPie() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  let startAngle = 0;
  let endAngle = 0;

  for(let i = 0; i < percentArray.length; i++) {
    startAngle = endAngle;
    endAngle = endAngle + (percentArray[i] * Math.PI);

    // context, x point for centre, y point for centre, radius
    drawSlice(context, 300, 200, 150, startAngle, endAngle, colorArray[i]);

    drawSliceText(context, 300, 200, 150, startAngle, endAngle, percentArray[i]*50);
  }
}

function drawSlice(context, sliceCenterX, sliceCenterY, radius, startAngle, endAngle, color) {
  context.fillStyle = color;
  context.beginPath();

  let medianAngle = (startAngle + endAngle) / 2;
  xOffset = Math.cos(medianAngle) * 10;
  yOffset = Math.sin(medianAngle) * 10;

  context.moveTo(sliceCenterX+xOffset, sliceCenterY+yOffset);
  context.arc(sliceCenterX+xOffset, sliceCenterY+yOffset, radius, startAngle, endAngle);
  context.closePath();
  context.fill();
}

function drawSliceText(context, sliceCenterX, sliceCenterY, radius, startAngle, endAngle, percent) {
  // x = radius * cos()

  let textX = sliceCenterX + Math.cos((startAngle+endAngle)/2) * radius;
  let textY = sliceCenterY + Math.sin((startAngle+endAngle)/2) * radius;

  context.fillStyle = 'black';
  context.font = '24px sans-serif';
  context.fillText(percent, textX, textY);
}
