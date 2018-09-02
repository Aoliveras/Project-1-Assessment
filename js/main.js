function main(){

    const input = document.querySelector('input');
    const output = document.getElementById('output');
    const addButton = document.getElementById('plus-btn');
    const minusButton = document.getElementById('minus-btn');
    output.innerText = 0;
    
    addButton.addEventListener('click', function() {
        if (input.value === "") { 
            alert('please select initial input value');
        } else {
        let hNumber = output.innerText;
        let outNum = parseInt(hNumber, 10);
        let iNumber = input.value;
        let inNum = parseInt(iNumber, 10);
        output.innerText = inNum + outNum;
            if (output.innerText >= 0) {
                output.removeAttribute("class");
                }
            }
    });


    minusButton.addEventListener('click', function() {
        if (input.value === "") { 
            alert('please select initial input value');
        } else {
            let hNumber = output.innerText;
            let outNum = parseInt(hNumber, 10);
            let iNumber = input.value;
            let inNum = parseInt(iNumber, 10);
            output.innerText = outNum - inNum;
                if (output.innerText < 0) {
                    output.className = "red";
            }
        }
    });


};

main();