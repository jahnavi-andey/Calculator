let resultDisplayed = false;

function appendValue(value) {
  const display = document.getElementById('display');

  if (resultDisplayed && /[0-9.]/.test(value)) {
    display.value = '';
  }
  resultDisplayed = false;
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
  resultDisplayed = false;
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
    resultDisplayed = true;
  } catch (error) {
    display.value = 'Error';
    resultDisplayed = true;
  }
}
