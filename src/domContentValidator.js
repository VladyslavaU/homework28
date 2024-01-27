/*
 Написати функцію на JavaScript, яка приймає два параметри: селектор DOM елемента та рядок, що очікується як контент цього елемента.
 Функція перевіряє наявність елемента у DOM за вказаним селектором і валідує, чи його текстовий контент відповідає переданому рядку.
 Функція повертає true, якщо елемент існує і його контент співпадає, і false в іншому випадку.
*/

function validateDomContent(selector, expectedContent) {
  const element = document.querySelector(selector)
  return element ? element.textContent === expectedContent : false
}

// console.log(validateDomContent('#testElement', 'Expected Content')) // Повинно вивести: true
// console.log(validateDomContent('#nonExistent', 'Content'))          // Повинно вивести: false

module.exports = validateDomContent
