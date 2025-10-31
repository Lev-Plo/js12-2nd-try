// ==========================
// ✅ Завдання 1
// Об'єднати всі елементи масиву в один рядок
// ==========================

console.log('=== Завдання 1 ===');

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// 👉 Варіант через for
let string = '';
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', ';
  }
}
console.log('Результат через for:', string);

// 👉 Варіант через join()
const stringJoin = friends.join(', ');
console.log('Результат через join():', stringJoin);



// ==========================
// ✅ Завдання 2
// Робота з колекцією карток Trello
// ==========================

console.log('\n=== Завдання 2 ===');

let cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4'];

console.log('Початковий список карток:');
console.table(cards);


// 🗑️ 3. Видалення картки
const cardToRemove = 'Картка-2';
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
  console.log(`✅ Картку "${cardToRemove}" видалено.`);
} else {
  console.log(`⚠️ Картку "${cardToRemove}" не знайдено.`);
}

console.log('Після видалення:');
console.table(cards);


// ➕ 4. Додавання картки
cards.push('Картка-5');
console.log('✅ Додано нову картку "Картка-5" у кінець.');

cards.splice(1, 0, 'Картка-Нова');
console.log('✅ Додано "Картка-Нова" після першої.');
console.log('Після додавання:');
console.table(cards);


// 🔁 5. Оновлення картки
const cardToUpdate = 'Картка-3';
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, 'Оновлена картка-3');
  console.log(`✅ Картку "${cardToUpdate}" оновлено.`);
} else {
  console.log(`⚠️ Картку "${cardToUpdate}" не знайдено.`);
}

console.log('Після оновлення:');
console.table(cards);
