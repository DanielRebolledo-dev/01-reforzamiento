import { heroes, type Owner, type Hero } from "./data/heroes.data"

const getHeroById = (id:number):Hero|undefined => {
    
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });
    // if (!hero){
    //     throw new Error(`no existe un heroe con el id ${id}`)
    // }
    return hero;
};

console.log(getHeroById(1));


export const getHeroByOwner = (owner:Owner) =>{

    const heroesByOwner = heroes.filter((hero) => hero.owner === owner)
    return heroesByOwner;
};