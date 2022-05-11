const renderPoke = (obj, id) => {
  const pokeList = document.querySelector('#pokeList')
  const pokeH1 = document.createElement('h1')
  const pokeImg = document.createElement('img')
  const pokeId = document.createElement('h2')

  pokeImg.className = 'choosePkmn'
  pokeH1.innerText = obj[id].name
  pokeH1.className = 'pkmn'
  pokeId.innerHTML = `<br>${id}`
  pokeId.className = 'idNum'
  pokeImg.src = obj[id].img

  pokeList.append(pokeH1, pokeImg)
  pokeH1.appendChild(pokeId)
}

const battlePoke = (yourId, rivalId, obj) => {
    const addClick = (move) => {
        move.addEventListener('click', ()=>{
            // adding text under your div that says what move you used
            const yourPokeDiv = document.querySelector('#yourPokeDiv')
            const div = document.createElement('div')
            div.textContent = `You used ${move.textContent}!`
            yourPokeDiv.append(div)

            // subtracting rival's HP
            const rivalHP = document.querySelector('#rivalPokeHP')
            let numHP = parseInt(rivalHP.textContent)
            if(numHP > 0){numHP -= 20}
            if(numHP === 0){
                rivalHP.style.color = 'red'
                const form = document.querySelector('#choosePkmn')
                const winningH1 = document.createElement('h1')
                
                let escText = document.querySelector('#escape-text')
                escText.innerHTML = 'press esc key to reset battle!'
              
                winningH1.textContent = 'YOU WON!!'
                form.append(winningH1)
                const moves = document.querySelectorAll('#yourPokeMoves button')
                moves.forEach(move=>move.disabled=true)
            }
            rivalHP.textContent = numHP

            // rival move
            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            const rndInt = randomIntFromInterval(0, 3)
            const rivalMove = rivalMovesArray[rndInt].textContent

            const rivalPokeDiv = document.querySelector('#rivalPokeDiv')
            const rivalDiv = document.createElement('div')
            rivalDiv.textContent = `Rival used ${rivalMove}!`
            rivalPokeDiv.append(rivalDiv)

            // subtracting your HP
            const yourHP = document.querySelector('#yourPokeHP')
            let yourNumHP = parseInt(yourHP.textContent)
            if(yourNumHP > 0){yourNumHP -= 10}
            yourHP.textContent = yourNumHP
        })
    }


  const yourImg = document.createElement('img')
  yourImg.src = obj[yourId].img
  yourImg.className = 'choosePkmn'
  yourImg.id = 'yourPkmnBattler'

  const rivalImg = document.createElement('img')
  rivalImg.src = obj[rivalId].img
  rivalImg.className = 'choosePkmn'
  rivalImg.id = 'rivalPkmnBattler'

  const yourName = document.querySelector('#yourPokeName')
  yourName.textContent = obj[yourId].name
  yourName.className = 'pkmn'
  yourName.append(yourImg)

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
  rivalName.className = 'pkmn'
  rivalName.append(rivalImg)

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

  yourMovesArray.forEach(move => addClick(move))
}

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
// **don't delete!**
//   fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then((resp) => resp.json())
//     .then((data) => {
//         addPokeObj(data)
//         renderPoke(data)
//     })

//   fetch('https://pokeapi.co/api/v2/pokemon/4')
//     .then((resp) => resp.json())
//     .then((data) => {
//         addPokeObj(data)
//         renderPoke(data)
//     })

//   fetch('https://pokeapi.co/api/v2/pokemon/7')
//     .then((resp) => resp.json())
//     .then((data) => {
//       addPokeObj(data)
//       renderPoke(data)
//       console.log(pokeObj[1].name)
//       battlePoke(7, 4, pokeObj)
//     })

  //battlePoke(1, 4)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelector('#yourPokeHP').innerText = 100
      document.querySelector('#rivalPokeHP').innerText = 100
      const moves = document.querySelectorAll('#yourPokeMoves button')
      moves.forEach(move=>move.disabled=false)
      document.querySelector('#rivalPokeHP').style.color = 'black'
    }
  })

  // testing multiple fetch request loop
  let fetchArray = []
  const loopFetch = (maxId) => {
    let id = 1
    while (id <= maxId) {
      fetchArray.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          addPokeObj(data)
        }))
      id++
    }
  }
  loopFetch(9)
  
  Promise.all(fetchArray).then((values) => {
    for (const id in pokeObj) {renderPoke(pokeObj, id)}
    //battlePoke(3, 6, pokeObj)
  })

  const battleForm = document.querySelector('#choosePkmn')
  const handleSubmit = (e) => {
    e.preventDefault()
    const yourInput = document.querySelector('#yourEntry').value
    const rivalInput = document.querySelector('#rivalEntry').value
    battlePoke(yourInput, rivalInput, pokeObj)
  }
  battleForm.addEventListener('submit', handleSubmit)
})

