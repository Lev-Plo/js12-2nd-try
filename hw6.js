let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let j = 2; j <= 20; j++) {
  if (j % 2 === 0) continue;
  console.log(j);
}

for (let k = 1; k <= 10; k++) {
  console.log(`7 x ${k} = ${7 * k}`);
}

let n = 15;
for (let x = 1; x <= 20; x++) {
  if (x >= n) break;
  console.log(x);
}

let y = 1;
while (y <= 20) {
  if (y % 3 === 0) {
    y++;
    continue;
  }
  console.log(y);
  y++;
}
