  var counter = 1;

  function createNewBtn() {
    var btn = document.createElement('button');
    var text = document.createTextNode('NEW BUTTON');
    var btnContainer = document.getElementById('btnContainer');
    btn.appendChild(text);
    btn.id = 'newBtn' + counter;
    btn.class= 'newButton';
    btnContainer.appendChild(btn);
    btnContainer.appendChild(document.createElement('br'));
    counter++;
  }

  function removeBtn(){
    var buttons = document.getElementById('btnContainer');
    buttons.removeChild(buttons.childNodes[0]);

  }
