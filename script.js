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

  if (data.id === 4)
    pokeImg.src = data.sprites.front_default
  else if (data.id === 7)
    pokeImg.src = data.sprites.front_default
  else if (data.id === 1)
    pokeImg.src = data.sprites.front_default
  pokeList.append(pokeH1, pokeId, pokeImg)
}

const battlePoke = (yourId, rivalId, obj) => {
    console.log(obj)

    const addClick = (move) => {
        console.log(move)
        move.addEventListener('click', ()=>{
            const rivalHP = document.querySelector('#rivalPokeHP')
            let numHP = parseInt(rivalHP.textContent)
            if(numHP > 0){numHP -= 20}
            if(numHP === 0){
                rivalHP.style.color = 'red'
                const form = document.querySelector('#choosePkmn')
                const winningH1 = document.createElement('h1')
                winningH1.textContent = 'YOU WON!!'
                form.append(winningH1)
            }
            rivalHP.textContent = numHP
        })
    }

    const yourName = document.querySelector('#yourPokeName')
    yourName.textContent = obj[yourId].name

    const yourMove1 = document.querySelector('#yourPokeMove1')
    yourMove1.textContent = obj[yourId].moves[0]

    const yourMove2 = document.querySelector('#yourPokeMove2')
    yourMove2.textContent = obj[yourId].moves[1]

    const yourMove3 = document.querySelector('#yourPokeMove3')
    yourMove3.textContent = obj[yourId].moves[2]

    const yourMove4 = document.querySelector('#yourPokeMove4')
    yourMove4.textContent = obj[yourId].moves[3]

    const rivalName = document.querySelector('#rivalPokeName')
    rivalName.textContent = obj[rivalId].name

    const rivalMove1 = document.querySelector('#rivalPokeMove1')
    rivalMove1.textContent = obj[rivalId].moves[0]

    const rivalMove2 = document.querySelector('#rivalPokeMove2')
    rivalMove2.textContent = obj[rivalId].moves[1]

    const rivalMove3 = document.querySelector('#rivalPokeMove3')
    rivalMove3.textContent = obj[rivalId].moves[2]

    const rivalMove4 = document.querySelector('#rivalPokeMove4')
    rivalMove4.textContent = obj[rivalId].moves[3]

    const yourMovesArray = [yourMove1, yourMove2, yourMove3, yourMove4]
    const rivalMovesArray = [rivalMove1, rivalMove2, rivalMove3, rivalMove4]

    yourMovesArray.forEach(move=>addClick(move))
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
            ]
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
      console.log(pokeObj[1].name)
      battlePoke(7, 4, pokeObj)
    })

    
    

  //form submission event handler
  const battleForm = document.querySelector('#battleBtn')
  //battleBtn.addEventListener('click', handleSubmit)
  const handleSubmit = () => { }
})
