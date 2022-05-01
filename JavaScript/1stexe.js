function print() {
  document.write("Hello World");
}

function addnum() {
  let a = parseInt(prompt("Enter the first Number: "));
  let b = parseInt(prompt("Enter the second Number: "));
  let c = a + b;
  document.write(c);
}

function sqrt() {
  let x = parseInt(prompt("Enter the Number: "));
  document.write(Math.sqrt(x));
}

function swap() {
  let a = parseInt(prompt("Enter first value"));
  let b = parseInt(prompt("Enter second value"));

  let c = a;

  a = b;

  b = c;
  document.write(`value of a is ${a} and b is ${b}`);
}

function c2f() {
  let a = parseInt(prompt("Enter the celsius value: "))
  let b = (a * 9) / 5;
  let faren = b + 32;
  document.write(faren);
}

function rand() {
  let a = Math.random();
  //getting random number from the range 
  let minval = parseInt(prompt("Enter the minimum range: "));
  let maxval = parseInt(prompt("Enter the maximum range: "));
  let ans = Math.floor((a * maxval) + minval);
  document.write(ans);
}

function oddEven() {
  let x = parseInt(prompt('Enter the value: '));
  if (x % 2 == 0) {
    document.write('This Number "' + x + '" is even');
  } else {
    document.write('This Number "' + x + '" is odd');
  }
}

function checkPrime() {
  const inputNumber = parseInt(prompt("Enter a positive integer: "));
  let Prime = true;

  if (inputNumber === 1) {
    document.write("1 is neither prime nor composite.");
  } else if (inputNumber > 1) {
    for (let i = 2; i < inputNumber; i++) {
      if (inputNumber % i == 0) {
        Prime = false;
        break;
      }
    }

    if (Prime) {
      document.write(`${inputNumber} is a prime number`);
    } else {
      document.write(`${inputNumber} is a not prime number`);
    }
  } else {
    ("it is not a prime number.");
  }
}

function factorial() {
  const facnum = parseInt(prompt("Enter a positive integer: "));

  if (facnum < 0) {
    document.write("Factorial for negative number does not exist.  :(");
  } else if (facnum === 0) {
    document.write(`The factorial of ${facnum} is 1.`);
  } else {
    let fact = 1;
    for (i = 1; i <= facnum; i++) {
      fact *= i;
    }
    document.write(`The factorial of ${facnum} is ${fact}`);
  }
}

function fibonacci() {
  const fibnum = parseInt(prompt("Enter the number of terms: "));
  let n1 = 0,
    n2 = 1,
    nn;

  console.log("Fibonacci Series is:");

  for (let i = 1; i <= fibnum; i++) {
    document.write(n1, ", ");
    nn = n1 + n2;
    n1 = n2;
    n2 = nn;
  }
}
