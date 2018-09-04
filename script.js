// Simplify query selector
let q = (selector) => document.querySelector(selector);

// Change theme
q(".theme-btn-purple").addEventListener('click', e => {
  q('.wrapper').classList.add('purple'); // wrong: q('.wrapper').className += 'purple'; => class='wrapperpurple'
})
q(".theme-btn-blue").addEventListener('click', e => {
  q('.wrapper').classList.remove('purple');
})
