const characterNames = ['Luffy', 'Zoro', 'Chopper', 'Nami']

const [ , , chopper ] = characterNames;

console.log({chopper})


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [ letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

//Tarea de desestructuración

const userState = (value: string) => {
    return[value, (newValue: string) =>{
        console.log(newValue);
    }] as const;
}

const [name, setName] = userState('Luffy');
console.log(name);
setName('Zoro');



