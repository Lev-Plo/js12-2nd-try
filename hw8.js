console.log("HW-8")

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];


let string = '';
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ',';
  }
}
console.log('Результат через for:', string);


const stringJoin = friends.join(',');
console.log('Результат через join():', stringJoin);



const cards = [
  'Картка-1',
  'Картка-2',
  'Картка-3',
  'Картка-4'
];

console.table(cards);

const cardToRemove = 'Картка-2';
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
  console.log(`Картку "${cardToRemove}" видалено.`);
} else {
  console.log(`Картку "${cardToRemove}" не знайдено.`);
}

console.table(cards);


cards.push('Картка-5');
console.log('Додано нову картку "Картка-5" у кінець.');
console.table(cards);


cards.splice(1, 0, 'Картка-Нова');
console.log('Додано "Картка-Нова" після першої.');
console.table(cards);


const cardToUpdate = 'Картка-3';
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, 'Оновлена картка-3');
  console.log(`Картку "${cardToUpdate}" оновлено.`);
} else {
  console.log(`Картку "${cardToUpdate}" не знайдено.`);
}

console.table(cards);
