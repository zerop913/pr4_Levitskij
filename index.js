// Задание 9
const name = "Иван";
console.log(`Привет, ${name}!`);

// Задание 10
function isEven(number) {
  return number % 2 === 0;
}

const number = 10;

if (isEven(number)) {
  console.log(`${number} - чётное число`);
} else {
  console.log(`${number} - нечётное число`);
}

// Задание 11
const person = {
  name: "Иван",
  age: 18,
  city: "Великий Новгород",
};

console.log(
  `Меня зовут ${person.name}. Мне ${person.age} лет. Я живу в городе ${person.city}.`
);

// Задание 12
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(`Сумма чисел в массиве: ${sum}`);

// Индивидуальное задание (10 вариант)
function power(x, n) {
  return Math.pow(x, n);
}

const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(
  `\nЗадание 10 (индивидуальное): ${base} в степени ${exponent} равно ${result}`
);
