// //forEach in map
// const currencies = new Map([
//     ['USD', 'United States Doller'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//     console.log(`${key} : ${value}`);
// });


//forEach in set - value and key will be same because set have no keys
const currenciesUnique = new Set(['USD', 'EUR', 'GBP','EUR']);

currenciesUnique.forEach(function(value, key, set) {
    console.log(`${key} : ${value}`);
});