let input = document.getElementById('result');

function handleClick(value) {
  input.value += value;
}

function calculate() {
  input.value = eval(input.value);
}

function clearInput() {
  input.value = '';
}
