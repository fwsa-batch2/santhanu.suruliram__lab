let workArea = document.getElementById('workArea');  // this is working area

function assign(num) {
    workArea.value += num;
}

function calc() {
    try {
        workArea.value = eval(workArea.value);
    }
    catch (err) {
        workArea.value = "Error :(";
    }
}
function clearall() {
    workArea.value = '';
}
function del() {
    workArea.value = workArea.value.slice(0, -1);
}

