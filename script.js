const renderPoke = (data)=>{
    const pokeList = document.querySelector('#pokeList')
    const h1 = document.createElement('h1')
    
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(resp => resp.json())
        .then((data) => {
            renderPoke(data)
        });

    fetch('https://pokeapi.co/api/v2/pokemon/4')
        .then(resp => resp.json())
        .then((data) => {
            renderPoke(data)
        });

    fetch('https://pokeapi.co/api/v2/pokemon/7')
        .then(resp => resp.json())
        .then((data) => {
            renderPoke(data)
        })
})