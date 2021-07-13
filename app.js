const users = {};

for(let i=1; i<3; i++){
    let name = prompt('ismizni kirting', 'name');
    let age = prompt('ismizni kirting');

    users[i] = {
        name: name,
        age: age
    }
}

for(let key in users){
    console.log(`Foydalanuvchi ${key}: `);
    for(let key2 in users[key]){
        console.log(`${key2}: ${users[key][key2]}`);
    }
}



let arr = [1, 2, 3, 4, 'men', {biz: 'siz'}];
console.log(arr.length);
// if(arr === [5]){
//     console.log('men');
// }