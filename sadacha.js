//  2. Пошук першого парного числа
let numbers = [1, 3, 7, 4, 9];
for (let a = 0; a < numbers.length; a+= 1) {
    if (numbers[a] %2 !== 0) {
        continue
    }
    console.log(numbers[a]);
}