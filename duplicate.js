const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
    'babul', 'abul', 'kabul', 'gabul', "cabul", 'babul', 'abul', 'abul'];
function removeDuplicate(array) {
    let unique = [];
    for (const name of array) {
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const result = removeDuplicate(names);
console.log(result);