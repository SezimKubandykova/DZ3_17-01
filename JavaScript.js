// 1.1
let age = prompt ('Сколько Вам лет?')
let checkAge = (age > 18) ? () => true : () => confirm('Родители разрешили?')
checkAge()

// 1.2
// let a = Number(prompt('Введите первое число'))
// let b = Number(prompt('Введите второе число'))
// let result = (a + b < 4) ? () => alert('Мало') : () => alert('Много')
// result()

// 1.3
let login = prompt ('Введите login')
let message = (login === 'Сотрудник') ? () => alert('Привет') : (login === 'Директор') ? () => alert('Здравствуйте') : (login === '') ? () => alert('Нет логина') : () => alert('')
message()

// 2.1
let ggg = function () {
  if (a > 0) {
    console.log('!')
  } else {
    console.log('!!')
  }
}
let a = 15
ggg ()

// 2.2
// function elementS () {
//   return elements.length
// }
// const elements = [
//   'Hydrogen',
//   'Helium',
//   'Lithium',
//   'Beryllium'
// ]
// console.log(elementS())

// 2.3
let elementS = () => elements.length
const elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
]
console.log(elementS())