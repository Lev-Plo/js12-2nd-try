let result = 5 + 5 + '5';
console.log("Значення result:", result);
console.log("Тип result:", typeof result);

let email = "example@gmail.com";
console.log("Email містить @:", email.includes("@")); 
console.log("Кількість символів у email:", email.length);

let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3 + " Мія";
console.log("Повне ім'я:", fullName);

let userName = "Лев";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
