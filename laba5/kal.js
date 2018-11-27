(function(){
  var Btns = document.querySelectorAll('.btn');
  var display = document.querySelector('.display');

  var oper1 = null;
  var oper2 = null;

  Btns.forEach(function(e) {
    e.addEventListener('click', function() {
      // Цифры
      if (Number.isFloat(+this.innerText)) {
        if (+display.innerText === 0) {
          display.innerText = this.innerText
        } else {
          display.innerText = display.innerText + this.innerText
        }
      }

      // удаление
      if (this.innerText.toLowerCase() === 'c') {
        display.innerText = 0;
        oper1 = null;
        oper2 = null;
      }

      // Удаление символа справа
      if (this.innerText.toLowerCase() === 'clc') {
        if (+display.innerText.length > 1) {
          display.innerText = display.innerText.slice(0, display.innerText.length-1)
        } else {
          display.innerText = 0
        }
      }

      // Кнопы
      if (this.innerText === '+' ||
          this.innerText === '-' ||
          this.innerText === '*' ||
          this.innerText === '/')
      {
        oper1 = display.innerText;
        oper2 = this.innerText;
        display.innerText = 0;
      }

      // =
      if (this.innerText === '=') {
        if (oper1) {
          eval('var result = function(){ return + oper1 ' + oper2 + ' +display.innerText }()');
          display.innerText = result;

          oper1 = null;
          oper2 = null;
        }
      }
    })
  })
})();
