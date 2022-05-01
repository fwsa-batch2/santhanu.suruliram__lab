
// this is a function for subtracting
function action(param1, param2, operation) {
    let num1 = +param1;
    let num2 = +param2;
    if (operation == "+") {
        out = num1 + num2;
    }
    else if (operation == "-") {
        out = num1 - num2;
    }
    else if (operation == "x") {
        out = num1 * num2;
    }
    else {
        out = num1 / num2;
    }
    
    return out;    
}
// function to perform after submitting
function submit_handler() {
    event.preventDefault();   // prevent from refresh..
    const firstnum = document.getElementById('in1');
    const secnum = document.getElementById('in2');
    const operation = document.getElementById('op');

    console.log('first number =' + firstnum.value);
    console.log('second number =' + secnum.value);
    // firstnum.value = param1      ||  secnum.value = param2
    const out = action(firstnum.value, secnum.value, operation.value);

    document.getElementById('ans').innerHTML = out;
}

