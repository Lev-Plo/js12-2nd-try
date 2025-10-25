console.log("HW-9")
  // Завдання 1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  logItems(["Mango", "Poly", "Ajax"]);

  // Завдання 2
  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const totalPrice = words.length * pricePerWord;
    return totalPrice;
  }

  console.log(calculateEngravingPrice("LeviLevi is my nickname", 10));
  
// Завдання 3
  function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }

  console.log(findLongestWord("I am Lev and I like to play any sports but high jump.")); 
  
  // Завдання 4
  function formatString(string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + "...";
    }
  }

  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
  
  // Завдання 5
  function checkForSpam(message) {
    const normalized = message.toLowerCase();
    return normalized.includes("spam") || normalized.includes("sale");
  }

  console.log(checkForSpam("Latest technology news"));
  console.log(checkForSpam("Get best SALE offers now!"));
  console.log(checkForSpam("Beware of SPAM messages"));

  // Завдання 6
  const numbers = [];
let input;

while (true) {
  input = prompt('Введіть число:');
  
  if (input === null) {
    break;
  }

  const number = Number(input);

  if (Number.isNaN(number)) {
    alert('Ви ввели не число! Спробуйте ще раз.');
  } else {
    numbers.push(number);
  }
}

let total = 0;
for (const num of numbers) {
  total += num;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Ви не ввели жодного числа.');
}
