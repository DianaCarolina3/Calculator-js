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
  equalsButton.forEach(button => {
    button.addEventListener('click',() => {
      //calcular
      compute()
      // //actualizar display
      upgradeDisplay()
      // alert(button.innerText)
    })
  })
}

function clikDelete() {
  deleteButton.forEach(button => {
  button.addEventListener('click',() => {
      clearOne()
      upgradeDisplay()
    })
  })
}

function clikClearAll() {
  clearAllButton.forEach(button => {
    button.addEventListener('click',() => {
      clearAll()
      upgradeDisplay()
    })
  })
}

//functions operations

function selectOperation(opera) {
  // currentOperation = currentOperation.toString() + opera.toString()
  if (currentOperation === '') return;
  if (currentOperation !== '') {
    compute()
  }
  operation = opera.toString()
  previousOperation = currentOperation
  currentOperation = ''
}

function compute() {
  var calculate;
  const previous = parseFloat(previousOperation)
  const current = parseFloat(currentOperation)
  if (isNaN(current) || isNaN(previous)) return;
  switch(operation) {
    case '+':
      calculate = previous + current
      break
    case '-':
      calculate = previous - current
      break
    case '×':
      calculate = previous * current
      break
    case '÷':
      calculate = previous / current
      break
    default:
      return
  }
  currentOperation = calculate
  operation = undefined
  previousOperation = ''
}

function addNumber(number) {
  //contatena los numeros, mas no los suma
  currentOperation = currentOperation.toString() + number.toString()
  upgradeDisplay()
}

function clearAll() {
  currentOperation = '';
  previousOperation = '';
  operation = undefined;
}

function clearOne() {
  currentOperation = currentOperation.toString().slice(0, -1)
}

function upgradeDisplay() {
  result.value = currentOperation
}


