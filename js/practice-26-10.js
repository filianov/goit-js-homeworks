'use strict';
// class Calculator {
//     constructor() {
//         this.symbols = [];
//         this._generateLayout();
//     }

//     static NUMBERS = '0123456789';

//     static OPERATIONS = {
//         DIVIDE: '/',
//         MULTIPLY: '*',
//         ADD: '+',
//         SUBTRACT: '-',
//     };

//     _getOperationByOperator(operator) {
//         const { OPERATIONS } = Calculator;

//         switch (operator) {
//             case OPERATIONS.ADD:
//                 return this._add;
//             case OPERATIONS.SUBTRACT:
//                 return this._subtract;
//             case OPERATIONS.MULTIPLY:
//                 return this._multiply;
//             case OPERATIONS.DIVIDE:
//                 return this._divide;
//         }
//     }

//     _parseString(string) {
//         let currentNum = '';
//         const splittedString = string
//             .split('')
//             .filter(element => element !== ' ')
//             .reduce((acc, element, i, arr) => {
//                 if (Calculator.NUMBERS.includes(element)) {
//                     //проверка на последнее число
//                     if (arr.length - 1 === i) {
//                         currentNum += element;
//                         let tempNum = +currentNum;
//                         currentNum = '';
//                         return [...acc, tempNum];
//                     }
//                     currentNum += element;
//                     return [...acc];
//                 } else {
//                     let tempNum = +currentNum;
//                     currentNum = '';
//                     return [...acc, tempNum, element];
//                 }
//             }, []);
//         console.log('splittedString from this._parseString()', splittedString);
//         return splittedString;
//     }

//     tryCalculate(str) {
//         this.symbols = this._parseString(str);

//         this._countMultiplicationAndDivision();
//         this._countSubtractionAndAddition();

//         return this.symbols;
//     }

//     // 3 + 5 + (6 * 7) + (4 / 6)
//     // 3 + 5 + 42 + 0.66667
//     _countOperation(indexOperator, operator) {
//         const operation = this._getOperationByOperator(operator);
//         // take 2 symbols between operator and count this operation with them
//         const result = operation(
//             this.symbols[indexOperator - 1],
//             this.symbols[indexOperator + 1],
//         );
//         this.symbols.splice(indexOperator - 1, 3, result);
//     }

//     _countMultiplicationAndDivision() {
//         while (true) {
//             const indexMultiply = this.symbols.indexOf(
//                 Calculator.OPERATIONS.MULTIPLY,
//             );
//             const indexDivide = this.symbols.indexOf(
//                 Calculator.OPERATIONS.DIVIDE,
//             );

//             if (indexMultiply > 0) {
//                 this._countOperation(
//                     indexMultiply,
//                     Calculator.OPERATIONS.MULTIPLY,
//                 );
//             } else if (indexDivide > 0) {
//                 this._countOperation(indexDivide, Calculator.OPERATIONS.DIVIDE);
//             } else {
//                 break;
//             }
//         }
//     }

//     _countSubtractionAndAddition() {
//         while (true) {
//             const indexAdd = this.symbols.indexOf(Calculator.OPERATIONS.ADD);
//             const indexSubtract = this.symbols.indexOf(
//                 Calculator.OPERATIONS.SUBTRACT,
//             );

//             if (indexAdd > 0) {
//                 this._countOperation(indexAdd, Calculator.OPERATIONS.ADD);
//             } else if (indexSubtract > 0) {
//                 this._countOperation(
//                     indexSubtract,
//                     Calculator.OPERATIONS.SUBTRACT,
//                 );
//             } else {
//                 break;
//             }
//         }
//     }

//     _add(a, b) {
//         return a + b;
//     }
//     _subtract(a, b) {
//         return a - b;
//     }
//     _multiply(a, b) {
//         return a * b;
//     }
//     _divide(a, b) {
//         return a / b;
//     }
// }

// const calculator = new Calculator();

// _generateLayout() {
//     const generateButtons = (wrapper, buttonSymbols, extraClass) => {
//       const generateButton = num => {
//         const button = document.createElement("div");
//         button.classList.add("b-button", "js-button");
//         extraClass && button.classList.add(extraClass);
//         button.textContent = num;
//         button.setAttribute("data-number", num);
//         button.setAttribute("data-small", true);
//         button.addEventListener(
//           "click",
//           function(event) {
//             console.log(event.target.getAttribute("data-number"));
//           },
//           true
//         );
//         wrapper.appendChild(button);
//       };

//       buttonSymbols.split("").forEach(num => generateButton(num));
//     };

//     const calculator = document.createElement(`div`);
//     const input = document.createElement(`input`);
//     calculator.classList.add("b-calculator", "js-calculator");

//     input.type = "text";
//     input.classList.add("b-input", "js-input");
//     calculator.appendChild(input);

//     const container = document.createElement("div");
//     container.classList.add("b-buttons");

//     const numbersWrapper = document.createElement("div");
//     numbersWrapper.classList.add("b-numbers");

//     const operatorsWrapper = document.createElement("div");
//     operatorsWrapper.classList.add("b-operators");

//     generateButtons(numbersWrapper, "9876543210.c");
//     generateButtons(operatorsWrapper, "+-*/", "b-button--operator");

//     container.appendChild(numbersWrapper);
//     container.appendChild(operatorsWrapper);
//     calculator.appendChild(container);

//     const button = document.createElement("div");
//     button.classList.add("b-button", "b-button--wide", "js-button-submit");
//     button.textContent = "=";
//     button.setAttribute("data-number", "=");
//     calculator.appendChild(button);

//     document.body.appendChild(calculator);
//   }
const size = 81;

const generateRandomColor = () => {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
};

const wrapper = document.createElement('div');
const createBox = () => {
    const box = document.createElement('div');
    box.addEventListener('mouseover', e => {
        const previousColor = e.target.style.backgroundColor;
        e.target.style.backgroundColor = generateRandomColor();
    });
    box.classList.add('block');
    wrapper.appendChild(box);
    box.addEventListener('mouseleave', e => {
        let previousColor;
        e.target.style.backgroundColor = previousColor;
    });
};

for (let i = 0; i < size; i += 1) {
    createBox();
}

// let previousColor;

wrapper.addEventListener('click', e => {
    const previousColor = e.target.style.backgroundColor;
    console.log(e.target);
    const blocks = [...wrapper.querySelectorAll('div')];
    blocks
        .filter(element => element !== e.target)
        .forEach(element => {
            element.style.background = generateRandomColor();
        });
});

document.body.appendChild(wrapper);
