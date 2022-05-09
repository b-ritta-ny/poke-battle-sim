document.addEventListener('DOMContentLoaded', () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=7')
        .then(resp => resp.json())
        .then((data) => console.log(data))
})