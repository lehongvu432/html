$(document).ready(function () {
  $('.calculator').fadeIn('slow').removeClass('hidden');

  var display = $('.input_result');
  var percentage = '';
  var button = '';
  var keyButton = '';
  var operator = '';
  var total = '';
  var operatorSelected = false;
  var num1 = '0';
  var num2 = '0';


  display.text('0');

  $('#clearall').click(function () {
    display.text('0');
    button = '';
    operator = '';
    total = '';
    operatorSelected = false;
    num1 = '0';
    num2 = '0';

  });


  $('.num').click(function () {
    button += $(this).text();
    display.text(button);

    if (operatorSelected == true) {
      num2 = button;
    }
    else {
      num1 = button;
    }
    total = button;
  });

  $('.operator').click(function () {
    if (operatorSelected) {
      total = calculateTotal(num1, operator, num2);
      display.text(total);
      num1 = total;
    }
    operator = $(this).text();
    button = '';
    operatorSelected = true;
  });

  $('#percentage').click(function () {
    total = calculatePercentage(total);
    if (operatorSelected == true) {
      num2 = total;
    }
    else {
      num1 = total;
    }
    display.text(total);
  });

  $('#changeSign').click(function () {
    total = calculateSign(total);
    if (operatorSelected == true) {
      num2 = total;
    }
    else {
      num1 = total;
    }
    display.text(total);
  });


  $('#equal').click(function () {
    if (num1 !== null && num2 !== null) {
      total = calculateTotal(num1, operator, num2);
      display.text(total);
      button = total;
    }
  });

  function calculateTotal(num1, operator, num2) {
    calculate = eval(num1 + operator + num2);
    Math.round(calculate);
    return calculate;
  }

  function calculatePercentage(num) {
    return (num / 100);
  }

  function calculateSign(num) {
    return (num * -1);
  }
  $("body").keydown(function (e) {
    var key = e.key;
    if (key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9' ||
      key == '0') {
      button += key;
      display.text(button);

      if (operatorSelected == true) {
        num2 = button;
      }
      else {
        num1 = button;
      }
      total = button;
    } else {
      if (key == '+' || key == '-' || key == '/' || key == '*') {
        if (operatorSelected) {
          total = calculateTotal(num1, operator, num2);
          display.text(total);
          num1 = total;
        }
        operator = key;
        button = '';
        operatorSelected = true;
      } else {
        if (key == '%') {
          total = calculatePercentage(total);
          if (operatorSelected == true) {
            num2 = total;
          }
          else {
            num1 = total;
          }
          display.text(total);
        } else {
          if (key == '=') {
            if (num1 !== null && num2 !== null) {
              total = calculateTotal(num1, operator, num2);
              display.text(total);
              button = total;
            }
          } else {
            if (key == "Backspace") {
              display.text('0');
              button = '';
              operator = '';
              total = '';
              operatorSelected = false;
              num1 = '0';
              num2 = '0';
            }
          }
        }
      }
    }

  });

});
