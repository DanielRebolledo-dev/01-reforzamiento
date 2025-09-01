// Funcion tradicional
function greet(name: string): string{
    return `Hello, ${name}`;
}

// Funcion flecha
const greetFlecha = (name: string): string =>{
    return `Hello, ${name}`;
}

const message = greet('Daniel');
const messageFlecha = greetFlecha('Daniel');

console.log(message);
console.log(messageFlecha);