const tables = [3, 4];
const NUMBER_OF_PROBLEMS = 25;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//  return Math.floor(
//      Math.random() * (Math.floor(max) - Math.ceil(min) + Math.ceil(min))
//  );
}

console.log('Tabeller att öva på är:');

for(let i=0; i < tables.length; i++) {
  console.log(` - ${tables[i]}:ans tabell`);
}

console.log('');
console.log('');

for(let i=0; i < NUMBER_OF_PROBLEMS; i++) {
  const multiplier = getRandomInt(0,10); //Math.random(10);
  const table = getRandomInt(3,5);
  console.log(`${table} * ${multiplier} = ?`);
  rl.question(`${table} * ${multiplier} = ?`, (answer) => {
    console.log(`Svar: ${answer}, rätt svar: ${multiplier * table}`);
    rl.close();
  });
}


