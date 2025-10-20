const array = ["My", "dog", "is", "cute"];
let stringNew = "";
for (let i = 0; i < array.length; i++) {
    stringNew = stringNew + array[i] + ",";
}
console.log(stringNew);

const toys = ["car", "plane", "bed", "jacket"];
console.log(toys.join());
