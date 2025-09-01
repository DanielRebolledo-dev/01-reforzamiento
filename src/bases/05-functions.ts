// Funcion tradicional
function greet(name: string): string{
    return `Hello, ${name}`;
}

// Funcion flecha
const greetFlecha = (name: string) => `Hello, ${name}`;


const message = greet('Daniel');
const messageFlecha = greetFlecha('Daniel');

console.log(message);
console.log(messageFlecha);

interface User {
    uid: string,
    username: string,
}

function getUser(): User{
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
const getUser2 = () =>({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);

const myNumbers: number[] = [1,2,3,4,5,6];

myNumbers.forEach( function(value){
    console.log({value})
})

myNumbers.forEach((value) =>{
    console.log({value})
});

myNumbers.forEach(console.log);

myNumbers.forEach((value, index, arr) =>{
    console.log(value,index,arr);
})
