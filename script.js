// Simplify query selector
let q = (selector) => document.querySelector(selector);

// Change theme
q(".theme-btn-purple").addEventListener('click', e => {
  q('.wrapper').classList.add('purple'); // wrong: q('.wrapper').className += 'purple'; => class='wrapperpurple'
})
q(".theme-btn-blue").addEventListener('click', e => {
  q('.wrapper').classList.remove('purple');
})

// Operations
let operator = '',
    operand = '0',
    hasOperator = false;

q('.btn').addEventListener('click', e => {
  
  // Input numbers
  if (e.target.className === 'num') {

    // Right after an operation
    if (q('.result-input').innerText !== '') {

      q('.result-input').innerText = '';
      operator = '';
      
      if (e.target.innerText === '.') {
        q('.result-output').innerText = '0.';
      } else {
        q('.result-output').innerText = e.target.innerText;
      }
      
    } else if (!hasOperator) {
      
      // If 0
      if (q('.result-output').innerText === '0') {

        // To avoid 00
        if (e.target.innerText !== '00') {

          if (e.target.innerText === '.') {
            // To avoid 2 dots
            if (!q('.result-output').innerText.includes('.')) {
              q('.result-output').innerText += '.';
            }

          } else {
            q('.result-output').innerText = e.target.innerText;
          }
        }

      // If !0
      } else {

        if (e.target.innerText === '.') {
          // To avoid 2 dots
          if (!q('.result-output').innerText.includes('.')) {
            q('.result-output').innerText += '.';
          }

        } else {
          q('.result-output').innerText += e.target.innerText;
        }
      }
    
    // The first number pressing after the operator
    } else {

      if (e.target.innerText === '.') {
        q('.result-output').innerText = '0.';
      } else if (e.target.innerText === '00') {
        q('.result-output').innerText = '0';
      } else {
        q('.result-output').innerText = e.target.innerText;
      }
      hasOperator = false;
    }
  }

  // Input operator + − × ÷
  if (e.target.className === 'opr') {

    if (q('.result-input').innerText !== '') q('.result-input').innerText = '';

    operand = q('.result-output').innerText;
    operator = e.target.innerText;
    hasOperator = true;
  }

  // Press 'equal'
  if (e.target.id === 'equal') {

    switch (operator) {
      case '+':
        q('.result-input').innerText = operand + '+' + q('.result-output').innerText;
        q('.result-output').innerText = parseFloat(operand) + parseFloat(q('.result-output').innerText);
        break;
      case '−':
        q('.result-input').innerText = operand + '−' + q('.result-output').innerText;
        q('.result-output').innerText = parseFloat(operand) - parseFloat(q('.result-output').innerText);
        break;
      case '×':
        q('.result-input').innerText = operand + '×' + q('.result-output').innerText;
        q('.result-output').innerText = parseFloat(operand) * parseFloat(q('.result-output').innerText);
        break;
      case '÷':
        q('.result-input').innerText = operand + '÷' + q('.result-output').innerText;
        q('.result-output').innerText = parseFloat(operand) / parseFloat(q('.result-output').innerText);
        break;
    }
  }

  // Press 'AC'
  if (e.target.id === 'ac') {

    q('.result-input').innerText = '';
    q('.result-output').innerText = '0';
    operator = '';
    operand = '0';
  }

  // Press 'C'
  if (e.target.id === 'c') {

    if (q('.result-input').innerText === '') {
      q('.result-output').innerText = '0';
    } else {
      q('.result-input').innerText = '';
      q('.result-output').innerText = '0';
    }
  }
})
