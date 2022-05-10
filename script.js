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

  if (data.id === 4) pokeImg.src = data.sprites.front_default
  else if (data.id === 7) pokeImg.src = data.sprites.front_default
  else if (data.id === 1) pokeImg.src = data.sprites.front_default

  pokeList.append(pokeH1, pokeImg)
  pokeH1.appendChild(pokeId)
  //pokeList.append(h1, pokeId, pokeImg)
}

const battlePoke = (yourId, rivalId) => {
  //grabbing html elements
  const yourName = document.querySelector('#yourPokeName')
  const yourHP = document.querySelector('#yourPokeHP')
  const yourMove1 = document.querySelector('#yourPokeMove1')
  const yourMove2 = document.querySelector('#yourPokeMove2')
  const yourMove3 = document.querySelector('#yourPokeMove3')
  const yourMove4 = document.querySelector('#yourPokeMove4')
  const rivalName = document.querySelector('#rivalPokeName')
  const rivalHP = document.querySelector('#rivalPokeHP')
  const rivalMove1 = document.querySelector('#rivalPokeMove1')
  const rivalMove2 = document.querySelector('#rivalPokeMove2')
  const rivalMove3 = document.querySelector('#rivalPokeMove3')
  const rivalMove4 = document.querySelector('#rivalPokeMove4')
  const img = document.createElement('img')
  const br = document.createElement('br')

  // changing elements relative to input ids
  if (yourId === 1) {
    yourName.textContent = 'bulbasaur'
    yourMove1.textContent = 'cut'
    yourMove2.textContent = 'tackle'
    yourMove3.textContent = 'vine whip'
    yourMove4.textContent = 'razor leaf'
    img.src =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    yourName.append(br, img)
  }
  if (yourId === 4) {
    yourName.textContent = 'charmander'
    yourMove1.textContent = 'body slam'
    yourMove2.textContent = 'scratch'
    yourMove3.textContent = 'flamethrower'
    yourMove4.textContent = 'fire blast'
  }
  if (yourId === 7) {
    yourName.textContent = 'squirtle'
    yourMove1.textContent = 'headbutt'
    yourMove2.textContent = 'take down'
    yourMove3.textContent = 'water gun'
    yourMove4.textContent = 'hydro pump'
  }

  if (rivalId === 1) {
    rivalName.textContent = 'bulbasaur'
    rivalMove1.textContent = 'cut'
    rivalMove2.textContent = 'tackle'
    rivalMove3.textContent = 'vine whip'
    rivalMove4.textContent = 'razor leaf'
  }
  if (rivalId === 4) {
    rivalName.textContent = 'charmander'
    rivalMove1.textContent = 'body slam'
    rivalMove2.textContent = 'scratch'
    rivalMove3.textContent = 'flamethrower'
    rivalMove4.textContent = 'fire blast'
  }
  if (rivalId === 7) {
    rivalName.textContent = 'squirtle'
    rivalMove1.textContent = 'headbutt'
    rivalMove2.textContent = 'take down'
    rivalMove3.textContent = 'water gun'
    rivalMove4.textContent = 'hydro pump'
  }

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

//form submission event handler
const battleBtn = document.querySelector('#battleBtn')
//battleBtn.addEventListener('click', handleSubmit)
const handleSubmit = () => {}

document.addEventListener('DOMContentLoaded', () => {
  const pokeObj = {}
  const addPokeObj = (data) => {
    pokeObj[data.id] = {
      name: data.name,
      img: data.sprites.front_default,
      moves: [
        data.moves[0].move.name,
        data.moves[1].move.name,
        data.moves[2].move.name,
        data.moves[3].move.name,
      ],
    }
  }
  fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((resp) => resp.json())
    .then((data) => {
      addPokeObj(data)
      renderPoke(data)
    })

  fetch('https://pokeapi.co/api/v2/pokemon/4')
    .then((resp) => resp.json())
    .then((data) => {
      addPokeObj(data)
      renderPoke(data)
    })

  fetch('https://pokeapi.co/api/v2/pokemon/7')
    .then((resp) => resp.json())
    .then((data) => {
      addPokeObj(data)
      renderPoke(data)
    })

  console.log(pokeObj)
  battlePoke(1, 4)

  //form submission event handler
  const battleForm = document.querySelector('#battleBtn')
  //battleBtn.addEventListener('click', handleSubmit)
  const handleSubmit = () => {}
})
