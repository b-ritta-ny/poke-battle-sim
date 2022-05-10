const renderPoke = (data) => {
  const pokeList = document.querySelector('#pokeList')
  const pokeH1 = document.createElement('h1')
  const pokeImg = document.createElement('img')
  const pokeId = document.createElement('h2')

  pokeImg.className = 'choosePkmn'
  pokeH1.innerText = data.name
  pokeH1.className = 'pkmn'
  pokeId.innerHTML = `<br>${data.id}`
  pokeId.className = 'idNum'

  //pokeImg.src = 'https://get.whotrades.com/u3/photo843E/20389222600-0/big.jpeg'

  if (data.id === 4)
    pokeImg.src =
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif'
  else if (data.id === 7)
    pokeImg.src =
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/a/a3/Squirtle.gif'
  else if (data.id === 1)
    pokeImg.src =
      'https://png.pngitem.com/pimgs/s/130-1306754_pokemon-bulbasaur-hd-png-download.png'
  pokeList.append(pokeH1, pokeImg)
  pokeH1.appendChild(pokeId)
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((resp) => resp.json())
    .then((data) => {
      renderPoke(data)
    })

  fetch('https://pokeapi.co/api/v2/pokemon/4')
    .then((resp) => resp.json())
    .then((data) => {
      renderPoke(data)
    })

  fetch('https://pokeapi.co/api/v2/pokemon/7')
    .then((resp) => resp.json())
    .then((data) => {
      renderPoke(data)
    })

  console.log(document.querySelector('bulbasaur'))



  //form submission event handler
  const battleForm = document.querySelector('#battleBtn')
  //battleBtn.addEventListener('click', handleSubmit)
  const handleSubmit = () => { }

})
