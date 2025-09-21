let number = '7';
const agent = number.padStart(10,'0');
console.log(agent);

const userNumber = "0931234567";
const formatingNumber = userNumber.padStart(15,"+(38)");
console.log(formatingNumber);
// +(38)0931234567

const lastName = "Fev";
const correctName = lastName.replace(lastName[0],"L");
console.log(correctName);

const language = "Javascript";
const result = language.substring(0,4);
console.log(result);

const lorem = "linganguliguliguli"
const res = lorem.slice(0 ,8);
console.log(res);

// const putName = prompt("Введіть своє імя.").trim();
// console.log(putName);
// Створи програму яка буде обрізати повідомлення від лишніх пропусків з обох сторін.

const fullName = "Lev Plotnyk";
const findIndex = fullName.indexOf(" ");
console.log(findIndex);

// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, на якій знаходиться пробіл між ім'ям та прізвищем.