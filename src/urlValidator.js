/*
 Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 Функція повертає true, якщо URL валідний, і false в іншому випадку.
*/

function isValidUrl(url) {
  const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  return regex.test(url)
}

// console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
// console.log(isValidUrl('invalid-url'))            // Повинно вивести: false


module.exports = isValidUrl
