const getPokeNames = (pokemons) => {

    return pokemons.map(pokemon => pokemon.name)
}

const getPokemonById = (pokemons, id) => {

    //find pokeman with ID
    return pokemons.find((pokemon) => {

        console.log("pokemon id:", pokemon.id, "id:", id)

        return pokemon.id === id

    })

}
//Transform into Rare array
const getRarePokemons = (pokemons) => {

    //console.log("pokemons",pokemons)

    return pokemons.filter((pokemon) => {

        return pokemon.spawn_chance < 0.1

    })

}

const getMidSizedPokemon = (pokemons) => {

    return pokemons.find((pokemon) => {
       
       
       return (parseInt(pokemon.weight) == 38)

    
    })

}

const getAdultPokemons =(pokemons) => {

   return pokemons.filter((pokemon) =>  {
        
        return pokemon.egg === "Not in Eggs"

    })

}

const getPokemonImages = (pokemons) => {

    return pokemons.map((pokemon) =>{

        return pokemon.img


    })
}


module.exports = {
    getPokeNames,
    getPokemonById,
    getRarePokemons,
    getMidSizedPokemon,
    getAdultPokemons,
    getPokemonImages
}