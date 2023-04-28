function valuePostfix(postfix) {
    var stack = [];
    var postfix = postfix.split(' ')
    function operator(x) {
      return ['+', '-', '*', '/', '%'].includes(x);
    }
  
    function valueOperator(x, operand1, operand2) {
      switch (x) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          return operand1 / operand2;
        case '%':
          return operand1 % operand2;
      }
    }
  
    for (var i = 0; i < postfix.length; i++) {
      var x = postfix[i];
  
      if (!operator(x)) {
        stack.push(parseFloat(x));
      } else {
        var operand2 = stack.pop();
        var operand1 = stack.pop();
        var result = valueOperator(x, operand1, operand2);
        stack.push(result);
      }
    }
    return stack[0];
  }

  module.exports = valuePostfix