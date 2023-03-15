// Elements from the display container
const display1Element = document.querySelector('.display1');
const display2Element = document.querySelector('.display2');
const tempDisplayElement = document.querySelector('.tempDisplay');

// Elements from the allButtons container (input buttons)
const allClearElement = document.querySelector('.allClear');
const lastEntityClearElement = document.querySelector('.lastEntityClear');

const operationElement = document.querySelectorAll('.operation');
const numberElement = document.querySelectorAll('.number');

const equalElement = document.querySelector('.equal');

//////////////////////////

let dis1 = '';
let dis2 = '';
let tempDis = null; // tempDis = result in webC
let lastOperation = '';

let haveDot = false;
numberElement.forEach(number => {
    number.addEventListener('click', (event) => {

        if (event.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }else if (event.target.innerText === '.' && haveDot) {
            return;
        }

        dis2 += event.target.innerText;
        display2Element.innerText = dis2

    })
});

operationElement.forEach(operation => {
    operation.addEventListener('click', (event) => {

        // To commence operations, there has to be a numerical value.
        if (!dis2) return; // this means '!dis2 = NOT dis2' meaning if dis2 is not present, this foreach function will not work. // only if there is a presence of dis2, this code will work

        haveDot = false // on click haveDot turns into 'false', so this eventListener lets us add a new dot once the operation is clicked 

        // operationName stores the operation's values inside it
        const operationName = event.target.innerText;

        if (dis1 && dis2 && lastOperation){
            mathOperation();
        } else {
            result = parseFloat(dis2);
        }

        clearVar (operationName)

    })
});

let clearVar = (name = '') => { //name is the operation eg: +, -;
    dis1 += dis2 + ' ' + name + ' '; // dis1 stores the value of dis2 and name(operation)
    display1Element.innerText = dis1;
    display2Element.innerText = '';
    dis2 = '';
    tempDisplayElement.innerText = result;
}
