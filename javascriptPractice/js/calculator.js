function insertNumber(value) {
  var currentVal = document.getElementById('window').value;
  var result = scrubSpaces(value);
  currentVal = currentVal + result;
  document.getElementById('window').value = currentVal;
}

function insertOperator(value) {
  var operator = scrubSpaces(value);
  var currentVal = document.getElementById('window').value;
  currentVal = currentVal.replace(/[\/\+\-\*]/g, '');
  currentVal = currentVal + operator;
  document.getElementById('window').value = currentVal;
}

function clearWindow() {
  document.getElementById('window').value = "";
}

function remove() {
  var currentVal = document.getElementById('window').value;
  currentVal = currentVal.slice(0, -1);
  document.getElementById('window').value = currentVal;

}

function compute() {
  var currentVal = document.getElementById('window');
  document.getElementById('result').value = eval(currentVal.value);
  currentVal.value = "";
}

function changeSign() {

}


function scrubSpaces(value) {
  value = value.replace(/\s+/g, '');
  return value;
}
