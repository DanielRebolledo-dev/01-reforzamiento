interface Person {
    name: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address{
    postalCode: string;
    city: string;
}

const ironman: Person = {
    name: 'Daniel',
    lastName: 'Rebolledo',
    age: 22,
    address:{
        postalCode: 'A-12345',
        city: 'Santiago',
    }
}

console.log(ironman);