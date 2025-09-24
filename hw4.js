let text1 = "Hello";
let text2 = "World";

if (text1 !== "" && text2 !== "") {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

let num1 = 7;
let num2 = 5;
let sum = num1 + num2;

if (sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

let text = "Я вивчаю JavaScript і люблю його";
if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

let number = 15;
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

let nameAnna = "Anna";
let email = "anna@example.com";
let password = "secret123";

let atIndex = email.indexOf("@");
let dotIndex = email.lastIndexOf(".");

if (nameAnna.length >= 3 &&
    atIndex > 0 &&
    dotIndex > atIndex + 1 &&
    password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}
