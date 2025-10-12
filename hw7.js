console.log("HW-7")
//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let arrayNumbers = [2, 8, 4];
arrayNumbers[1] = 10;
console.log(arrayNumbers);

//Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let arrayStrings = ["one", "two", "three"];
arrayStrings[3] = "four";
console.log(arrayStrings);

//Створити скрипт який поверне суму всіх чисел в масиві.
let suma = 0;
let arraySum = [2, 9, 5, 8, 6, 0];
for (let i = 0; i < arraySum.length; i++) {
    suma = suma + arraySum[i]
}
console.log(suma);

//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let arrayNumbers2 = [7, 2, 0, 1, 3];
for (let i = 0; i < arrayNumbers2.length; i++) {
    console.log(arrayNumbers2[i]);
  }

//Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
let arrayStrings2 = ["hfd", "fjygdfg", "hkvp"];
for (let str of arrayStrings2) {
  if (str.length > 5) {
    console.log(str);
  }
}

//Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let arrayNumbers3 = [1, 3, 7, 4, 9, 7, 5, 3, 0, 5];
for (let i = 0; i < arrayNumbers3.length; i++) {
    if (arrayNumbers3[i] % 2 === 0) {
        console.log(arrayNumbers3[i]);
    }
}