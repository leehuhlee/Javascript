const firstValue = process.argv[2];
const secondValue = process.argv[3];

console.log(firstValue.localeCompare(secondValue, 'en', { sensitivity: 'base' }));
