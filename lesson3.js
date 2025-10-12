// Задача 4: Ввести число більше 10 (do...while)
// let num;
// do {
//     num = Number(prompt("Введіть число більше десяти."))
// } while(num <= 10)
// console.log(num);

//Задача: Запросити у користувача число більше 0 та зробити перевірку на не число
let num;
do {
    num = Number(prompt("Введіть число більше 0."))
} while(num <= 0 || isNaN(num))
    console.log(num);
    