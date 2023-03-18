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
let haveDot = false;
let result = null;
let lastOperation = '';

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

        if (!dis2) return; //if dis2 is empty meaning no numaric values added then operarions wont work

        haveDot = false // on click haveDot turns into 'false', so this eventListener lets us add a new dot once the operation is clicked 

        const operationName = event.target.innerText; // operationName stores the operation's values inside it

        if (dis1 && dis2 && lastOperation){
            mathOperation();
        } else {
            result = parseFloat(dis2);//on button click it turns the null value into a numaric value coming from the dis2 // makes clearVar() have a numaric value in dis1
        }

        clearVar (operationName);
        lastOperation = operationName; // on click 'lastOperation' will take the value of the clicked variable and do the operation in mathOperation()
    })
});

// this functions runs everytime the above loop is executed
let clearVar = (name = '') => { //'name' is the operation eg: +, -;
    dis1 += dis2 + ' ' + name + ' '; // Concatenate dis2 and name and stores it in dis1. //on click the 'name' takes the value of the current operant and puts it in the 'operationName'
    display1Element.innerText = dis1; 

    display2Element.innerText = ''; // Resetting the display2Element and dis2 to an empty string so new values can be entered
    dis2 = '';

    tempDisplayElement.innerText = result;
}

let mathOperation = () => {
    if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2)
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2)
    } else if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2)
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2)
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2)
    }
}

equalElement.addEventListener('click', () => {
    if (!dis1 || !dis2) return;

    haveDot = false;
    mathOperation();
    clearVar();
    display2Element.innerText = result;
    tempDisplayElement.innerText = '';
    dis2 = result;
    // dis1 = ''; // commenting out because I wanna see my history
})

lastEntityClearElement.addEventListener('click', () => {
    display2Element.innerText = '';
    dis2 = '';
})

window.addEventListener('keydown', (event) => {
    if (
        event.key === '0' ||
        event.key === '1' ||
        event.key === '2' ||
        event.key === '3' ||
        event.key === '4' ||
        event.key === '5' ||
        event.key === '6' ||
        event.key === '7' ||
        event.key === '8' ||
        event.key === '9' ||
        event.key === '.'
    ){
        clickButtonEl(event.key);
    } else if (
        event.key === '%' ||
        event.key === '/' ||
        event.key === '-' ||
        event.key === '+' 
    ){
        clickOperation(event.key);
    }else if (
        event.key === '*'
    ){
        clickOperation('X')
    }else if (
        event.key == 'Enter' || event.key === '='
    ){
        clickEqual();
    }
})

let clickButtonEl = (key) => {
    numberElement.forEach( (button) => {
        if (button.innerText === key){
            button.click();
        }
    })
}

let clickOperation = (key) => {
    operationElement.forEach( (button) => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

let clickEqual = () => {
    equalElement.click()
}






// check on this not working:
// } else if (
//     event.key === '%' ||
//     event.key === '/' ||
//     event.key === '*' ||
//     event.key === '-' ||
//     event.key === '+' 
// ){
// whats the point of decalring empty variables first only?