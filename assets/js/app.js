const numbersButton = document.getElementsByName('data-number');
const operationButton = document.getElementsByName('data-operation');
const equalsButton = document.getElementsByName('data-equals');
const deleteButton = document.getElementsByName('data-delete');
const clearAllButton = document.getElementsByName('data-clearAll');
var result = document.getElementById('result');
var currentOperation = '';
var previousOperation = '';
var operation = undefined;

function clikNumbers() {
  numbersButton.forEach(button => {
    button.addEventListener('click',() => {
      addNumber(button.innerText)
      // alert(button.innerText)
    })
  })
}

function clikOperation() {
  operationButton.forEach(button => {
    button.addEventListener('click',() => {
      selectOperation(button.innerText)
      // alert(button.innerText)
    })
  })
}

function clikEquals() {
  equalsButton.addEventListener('click',() => {
      //calcular
      compute()
      //actualizar display
      upgradeDisplay()
    })
}

function clikDelete() {
  deleteButton.addEventListener('click',() => {
      clearOne()
      upgradeDisplay()
    })
}

function clikClearAll() {
  clearAllButton.addEventListener('click',() => {
      clearAll()
      upgradeDisplay()
  })
}

//functions operations
function addNumber(number) {
  //contatena los numeros, mas no los suma
  currentOperation = currentOperation.toString() + number.toString()
  upgradeDisplay()
}

function upgradeDisplay() {
  result.value = currentOperation
}