const numbersButton = document.getElementsByName('data-number');
const operationButton = document.getElementsByName('data-operation');
const equalsButton = document.getElementsByName('data-equals')[0];
const deleteButton = document.getElementsByName('data-delete');
const clearAllButton = document.getElementsByName('data-clearAll');
var result = document.getElementById('result');


function clikNumbers() {
  numbersButton.forEach(button => {
    button.addEventListener('click',() => {
      // addNumber(button.innerText)
      // alert(button.innerText)
    })
  })
}

function clikOperation() {
  operationButton.forEach(button => {
    button.addEventListener('click',() => {
      // selectOperation(button.innerText)
      // alert(button.innerText)
    })
  })
}

function clikEquals() {
  equalsButton.addEventListener('click',() => {
      //calcular
      compute()
      //actializar display
      upgradeDisplay()
      // alert(button.innerText)
    })
}

function clikDelete() {
  deleteButton.addEventListener('click',() => {
      clearOne()
      upgradeDisplay()
      alert(button.innerText)
    })
}

function clikClearAll() {
  clearAllButton.addEventListener('click',() => {
      clearAll()
      upgradeDisplay()
      alert(button.innerText)
  })
}