let counterPlusElem = document.querySelector('button-small');
let conterDisplayElem = document.querySelector('counter-display');
let count = 0;

counterPlusElem.addEventListener("click",()=>{
  count++;
  updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
}
