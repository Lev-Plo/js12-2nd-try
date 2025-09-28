let drink = "Чай";

switch (drink) {
    case "Кава":
        console.log("Ви обрали каву");
        break;
    case "Чай":
        console.log("Ви обрали чай");
        break;
    case "Сік":
        console.log("Ви обрали сік");
        break;
    default:
        console.log("Невідомий напій");
}

let day = "субота";

switch (day.toLowerCase()) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п’ятниця":
        console.log("Це робочий день");
        break;
    case "субота":
    case "неділя":
        console.log("Це вихідний");
        break;
    default:
        console.log("Невідомий день");
}

let month = 3;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Невірний номер місяця");
}

let color = "зелений";

switch (color.toLowerCase()) {
    case "червоний":
        console.log("СТОП!");
        break;
    case "жовтий":
        console.log("Чекати");
        break;
    case "зелений":
        console.log("Йти");
        break;
    default:
        console.log("Невідомий колір");
}

let num1 = 10;
let num2 = 0;
let operator = "/";

switch (operator) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Помилка: ділення на нуль.");
        } else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
    default:
        console.log("Невідомий оператор");
}
