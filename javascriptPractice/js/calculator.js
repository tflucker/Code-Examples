function insertNumber(value) {
  var currentVal = document.getElementById('window').value;
  var result = scrubSpaces(value);
  currentVal = currentVal + result;
  document.getElementById('window').value = currentVal;
}

function insertOperator(value) {
  var operator = scrubSpaces(value);
  var currentVal = document.getElementById('window').value;
  currentVal = currentVal[currentVal.length - 1].replace(/[\/\+\-\*]/g, '');
  currentVal = currentVal + operator;
  document.getElementById('window').value = currentVal;
}

function squareRoot(){
  var currentVal = document.getElementById('window').value;
  if(currentVal < 0){
    insertError('Cannot square root negative numbers');
    clearWindow();
  }else{
    document.getElementById('result').value = Math.sqrt(currentVal);
  }
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
  var currentVal = document.getElementById('window');
  if(currentVal != 0 ){
    currentVal.value = currentVal.value * -1;
  }
}

function insertError(value){
  document.getElementById('errorMsg').innerHTML = value;

}

function scrubSpaces(value) {
  if(value == 'divide'){
    value = '/';
  }else{
    value = value.replace(/\s+/g, '');
  }
  return value;
}
