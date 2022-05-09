document.addEventListener('DOMContentLoaded', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(resp => resp.json())
        .then((data) => console.log(data));

    fetch('https://pokeapi.co/api/v2/pokemon/4')
        .then(resp => resp.json())
        .then((data) => console.log(data));

    fetch('https://pokeapi.co/api/v2/pokemon/7')
        .then(resp => resp.json())
        .then((data) => console.log(data))
})