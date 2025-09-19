const person = {
    name: 'Daniel',
    age: 22,
    key: 'Drako',
};

const { key, name:playerName, age} = person


console.log({ playerName, age, key})

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const  useContext = ({key, name, age, rank = 'sin rango'}: Hero) =>{
    return {
        keyname: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank,
    }
}

const { rank, keyname, user: { name } } = useContext (person)

console.log(rank, keyname, name);

