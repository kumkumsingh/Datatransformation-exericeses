const calculateTotalPokemonWeight = (pokemons) => {
    return pokemons.reduce((totalWeight, currentPokemon) => {
        return totalWeight + parseFloat(currentPokemon.weight)
    }, 0)
}

const calculateAverageSpawnChance = (pokemons) => {

    const arrayLenght = pokemons.length

    const totalspawnchance = pokemons.reduce((accumulator, currentvalue) => {

        return accumulator + currentvalue.spawn_chance
    }, 0) / arrayLenght

    return totalspawnchance
}




const getHeaviestPokemon = (pokemons) => {

    //console.log("my pokemons",pokemons)

    const heaviestPokeon = pokemons.reduce((accumulator, currentvalue) => {

        if (parseInt(accumulator.weight) > parseInt(currentvalue.weight)) {

            return accumulator
        }
        return currentvalue
    })


    return heaviestPokeon
}

const calculateTotalEggDistance = (pokemons) => {
       
   // console.log("pokemon")

   const babyEggs= pokemons.reduce((accumulator,currentvalue) => {

    //console.log(currentvalue.egg)
    if(currentvalue.egg !== "Not in Eggs"){
       
        // console.log(accumulator.egg + currentvalue.egg)

        return accumulator + parseInt(currentvalue.egg)
    }
    return accumulator

    },0)

   return babyEggs
}
/*
categorizePokemonsByRarity should return an object like this:

{
   common: [ ], // array of pokemons
   rare: [ ], // array of pokemons
   legendary: [ ], // array of pokemons
}

Common: spawn_chance higher than 0.1
Rare: spawn_chance less than 0.1
Legendary: spawn_chance less than 0.01

*/

module.exports = {
    calculateTotalPokemonWeight,
    calculateAverageSpawnChance,
    getHeaviestPokemon,
    calculateTotalEggDistance
}