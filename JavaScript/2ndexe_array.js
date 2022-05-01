let myArr = ["samsung", "apple", "xiaomi", "oneplus", "huawei"];
document.write("This is original Array:" + "<br>" + myArr + "<br>" + "<br>");

function removeSpecific() {
  let input = prompt("Enter the value:");
  const index = myArr.indexOf(input);
  console.log(index);
  myArr.splice(index, 1);
  document.write("The Array is:" + myArr);
}

function check4Specific() {
  let input = prompt("Enter the value:");
  console.log(myArr.includes(input));
  if (myArr.includes("oneplus")) {
    document.write("The specific value is in the array");
  } else {
    document.write("The specific value is not in the array");
  }
}
function insert() {
  let input = prompt("Enter the value:");
  myArr.push(input);
  document.write(myArr);
}

function emptyArray() {
  myArr.splice(5, myArr.length);
  document.write("output is:" + myArr);
}
function addBegin() {
  myArr.unshift("LG");
  document.write(myArr);
}
function remDuplicate() {
  let b = myArr[2];
  console.log(b);
  myArr.push(b);
  console.log(myArr);
  let remDup = [...new Set(myArr)];
  document.write(remDup);
}

function find2DimArray(x) {
  let arr = [];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < x; j++) {
      arr[i] = [];
    }
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < x; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
}
function twoDimensionalArray() {
  const inp = 4;
  const result = find2DimArray(inp);
  document.write(result);
}

function findExtractedValue(arr, prop) {
  let outputValue = arr.map((item) => item[prop]);
  return outputValue;
}
function extractValue() {
  const inputArray = [
    { first: 1, second: 2 },
    { first: 4, second: 5 },
    { first: 8, second: 9 },
  ];
  const result = findExtractedValue(inputArray, "second");
  document.write(result);
}

function compareArray(one, two) {
  const result = JSON.stringify(one) == JSON.stringify(two);
  if (result) {
    document.write("The arrays have the same elements.");
  } else {
    document.write("The arrays have different elements.");
  }
}
function executeCompareArray() {
  const one = ["Santhanu", "Rishi", "Jeru", "Riyas"];
  const two = ["Santhanu", "Rishi", "jeru", "Riyas"];
  compareArray(one, two);
}

function randomItemArray() {
  const sanArr = ["Santhanu", "Rishi", "Jeru", "Riyas"];
  let sanRand = Math.floor(Math.random() * sanArr.length + 0);
  console.log(sanRand);
  document.write(sanArr[sanRand]);
}

function breakArray(arr, chunk) {
  for (i = 0; i < arr.length; i += chunk) {
    let brokenArray = arr.slice(i, i + chunk);
    document.write(brokenArray + '&nbsp');
  }
}
function breakIntoChunk() {
  const sanArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const chunk = 4;
  breakArray(sanArray, chunk);
}
