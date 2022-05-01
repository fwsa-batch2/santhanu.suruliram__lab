let mainList = [];

// assigning values to main list
function clicked() {
    event.preventDefault();
    let input = document.getElementById('mainInput');
    mainList.unshift(input.value);
    console.log(mainList);
    let output = '';
    for (i=0; i<mainList.length; i++) {
        let item = mainList[i];
        let newOutput = '<li>'+ item+'</li>';
        output = output + newOutput;
    }
    document.getElementById('listArea').innerHTML = output;
}

