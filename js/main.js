console.log('JS Loadee!!!');


//create const for input, plus button and minus buttons
//add eventlisteners to all 3
//create a function that adds input
//getinput
//getoutput
//add them
//make new output

//create a function that subtracts input
function main(){

const input = document.querySelector('input');
const output = document.getElementById('output');
const addButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');
output.innerText = 0;


addButton.addEventListener('click', function() {
   //console.log('clicked');
    let hNumber = output.innerText;
    console.log(typeof(hNumber));
    console.log(hNumber);
    let outNum = parseInt(hNumber, 10);
    console.log(typeof(outNum));
    console.log(outNum);
    let iNumber = input.value;
    console.log(typeof(iNumber));
    let inNum = parseInt(iNumber, 10);
    console.log(typeof(inNum));
    console.log(inNum);
    output.innerText = inNum + outNum;
    });


minusButton.addEventListener('click', function() {
    console.log("minus button clicked!");
    let hNumber = output.innerText;
    console.log(typeof(hNumber));
    console.log(hNumber);
    let outNum = parseInt(hNumber, 10);
    console.log(typeof(outNum));
    console.log(outNum);
    let iNumber = input.value;
    console.log(typeof(iNumber));
    let inNum = parseInt(iNumber, 10);
    console.log(typeof(inNum));
    console.log(inNum);
    output.innerText = outNum - inNum;
    if (output.innerText < 0) {
        output.className = "red";
    }


});


};

main();