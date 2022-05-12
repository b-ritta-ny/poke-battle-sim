const renderPoke = (obj, id) => {
  const pokeList = document.querySelector('#pokeList')
  const pokeH1 = document.createElement('h1')
  const pokeImg = document.createElement('img')
  const pokeId = document.createElement('h2')
  const pokeType = document.createElement('h3')
  const selectType = document.querySelector('#typeSelect')
  //const typeOption = document.createElement('option')
  const pokeDiv = document.createElement('div')

  pokeImg.className = 'choosePkmn'
  pokeH1.innerText = obj[id].name
  pokeH1.className = 'pkmn'
  pokeH1.setAttribute('name', 'pokeInfo')
  pokeId.innerHTML = `<br>${id}`
  pokeId.className = 'idNum'
  pokeImg.src = obj[id].img
  pokeType.className = 'pkmn'
  pokeType.textContent = obj[id].type
  pokeType.setAttribute('name', 'pokeType')

  if (pokeType.textContent === 'bug') {
    pokeType.id = 'bug'
  } else if (pokeType.textContent === 'dragon') {
    pokeType.id = 'dragon'
  } else if (pokeType.textContent === 'electric') {
    pokeType.id = 'electric'
  } else if (pokeType.textContent === 'fairy') {
    pokeType.id = 'fairy'
  } else if (pokeType.textContent === 'fighting') {
    pokeType.id = 'fighting'
  } else if (pokeType.textContent === 'fire') {
    pokeType.id = 'fire'
  } else if (pokeType.textContent === 'flying') {
    pokeType.id = 'flying'
  } else if (pokeType.textContent === 'ghost') {
    pokeType.id = 'ghost'
  } else if (pokeType.textContent === 'grass') {
    pokeType.id = 'grass'
  } else if (pokeType.textContent === 'ground') {
    pokeType.id = 'ground'
  } else if (pokeType.textContent === 'ice') {
    pokeType.id = 'ice'
  } else if (pokeType.textContent === 'normal') {
    pokeType.id = 'normal'
  } else if (pokeType.textContent === 'poison') {
    pokeType.id = 'poison'
  } else if (pokeType.textContent === 'psychic') {
    pokeType.id = 'psychic'
  } else if (pokeType.textContent === 'rock') {
    pokeType.id = 'rock'
  } else if (pokeType.textContent === 'water') {
    pokeType.id = 'water'
  } else {
    console.log("There's a missing type here...")
  };

  //typeOption.textContent = obj[id].type
  //need to do something about options repeating -brian
  //typeOption.value = obj[id].type
  pokeDiv.id = id

  pokeList.appendChild(pokeDiv)
  pokeDiv.append(pokeH1, pokeImg)
  pokeH1.appendChild(pokeId)
  pokeH1.appendChild(pokeType)

  //selectType.appendChild(typeOption)
}

const battlePoke = (yourId, rivalId, obj) => {
  const addClick = (move) => {
    move.addEventListener('click', () => {
      // adding text under your div that says what move you used
      const yourPokeDiv = document.querySelector('#yourPokeDiv')
      const div = document.createElement('div')

      // subtracting rival's HP
      const rivalHP = document.querySelector('#rivalPokeHP')
      let numHP = parseInt(rivalHP.textContent)

      let dmg = randomIntFromInterval(1, 3) * 10
      if (numHP > 0) {
        numHP -= dmg
      }
      div.setAttribute('class', 'reset1')
      div.textContent = `You used ${move.textContent} for ${dmg} damage!`
      yourPokeDiv.append(div)
      if (numHP <= 0) {
        rivalHP.style.color = 'red'
        const form = document.querySelector('#choosePkmn')
        const winningH1 = document.createElement('h1')
        winningH1.setAttribute('id', 'you-won')

        let escText = document.querySelector('#escape-text')
        escText.innerHTML = 'press esc key to reset battle!'

        winningH1.textContent = 'YOU WON!!'
        winningH1.style.color = 'green'
        form.append(winningH1)
        const moves = document.querySelectorAll('#yourPokeMoves button')
        moves.forEach((move) => (move.disabled = true))
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

      // subtracting your HP
      const yourHP = document.querySelector('#yourPokeHP')
      let yourNumHP = parseInt(yourHP.textContent)

      let yourDmg = randomIntFromInterval(0, 3) * 10
      if (yourNumHP > 0) {
        yourNumHP -= yourDmg
      }
      rivalDiv.setAttribute('class', 'reset2')
      rivalDiv.textContent = `Rival used ${rivalMove} for ${yourDmg} damage!`
      rivalPokeDiv.append(rivalDiv)
      if (yourNumHP <= 0) {
        yourHP.style.color = 'red'
        const form = document.querySelector('#choosePkmn')
        const losingH1 = document.createElement('h1')
        losingH1.setAttribute('id', 'you-lost')

        let escText = document.querySelector('#escape-text')
        escText.innerHTML = 'press esc key to reset battle!'

        losingH1.textContent = 'RIVAL WON!!'
        losingH1.style.color = 'red'
        form.append(losingH1)
        const moves = document.querySelectorAll('#yourPokeMoves button')
        moves.forEach((move) => (move.disabled = true))
      }
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

  yourMovesArray.forEach((move) => addClick(move))
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
      type: data.types[0].type.name,
    }
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
      moves.forEach((move) => (move.disabled = false))
      document.querySelector('#rivalPokeHP').style.color = 'black'
      document.querySelector('#yourPokeHP').style.color = 'black'
      document.querySelector('#escape-text').innerHTML = ''
      document.querySelector('#yourPokeName').textContent = ''
      document.querySelector('#rivalPokeName').textContent = ''
      const resetDivs1 = document.querySelectorAll('div .reset1')
      document.querySelector('#choosePkmn').innerHTML =
        ' <label for="yourPkmn">Your Pokémon ID:</label><input type="text" id="yourEntry" name="idEntry"> <input type="submit" id="submit" value="Battle"><label for="vsPkmn">Rival Pokémon ID:</label> <input type="text" id="rivalEntry" name="idEntry">'
      resetDivs1.forEach((div) => {
        div.remove()
      })
      const resetRivalDivs = document.querySelectorAll('div .reset2')
      resetRivalDivs.forEach((rivalDiv) => {
        rivalDiv.remove()
      })
    }
  })

  // testing multiple fetch request loop
  let fetchArray = []
  const loopFetch = (maxId) => {
    let id = 1
    while (id <= maxId) {
      fetchArray.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            addPokeObj(data)
          })
      )
      id++
    }
  }
  loopFetch(51)

  Promise.all(fetchArray).then((values) => {
    for (const id in pokeObj) {
      renderPoke(pokeObj, id)
    }

    //configuring select function to filter pokemon by type in pokelist
    const allOptions = document.querySelectorAll('#typeSelect option')

    const selectType = document.querySelector('#typeSelect')
    const pokeList = document.querySelectorAll('#pokeList > *')
    const allTypes = document.querySelectorAll('#pokeList h1 h3')

    selectType.addEventListener('click', selectClick)

    function selectClick(e) {
      const allPokeDivs = document.querySelectorAll('div div')
      allPokeDivs.forEach((div) => (div.style.display = 'block'))
      allTypes.forEach((type) => {
        if (e.target.value === 'All') {
        } else if (type.textContent !== e.target.value) {
          type.parentNode.parentNode.style.display = 'none'
        }
      })
    }
    //battlePoke(3, 6, pokeObj)
    let typeArray = new Set()
    for (const poke in pokeObj) {
      typeArray.add(pokeObj[poke].type)
    }
    typeArray.forEach((type) => {
      const typeOption = document.createElement('option')
      typeOption.textContent = type
      typeOption.value = type
      selectType.appendChild(typeOption)
    })
  })

  const battleForm = document.querySelector('#choosePkmn')
  const handleSubmit = (e) => {
    e.preventDefault()
    const yourInput = document.querySelector('#yourEntry').value
    const rivalInput = document.querySelector('#rivalEntry').value
    battlePoke(yourInput, rivalInput, pokeObj)
    document.querySelector('#yourEntry').value = ''
    document.querySelector('#rivalEntry').value = ''
  }
  battleForm.addEventListener('submit', handleSubmit)
})
