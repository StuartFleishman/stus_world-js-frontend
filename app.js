

  const scoreDisplay = document.getElementById('score')
  const width = 28
  const grid = document.querySelector('.grid')
  const layout = [
    1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]

 

  function rollDice() {
    wrong.className = "hidden"
    const die1 = document.getElementById('die1')
    const die2 = document.getElementById('die2')
    const status = document.getElementById('status')
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const diceTotal = d1 + d2;
    die1.innerHTML = d1
    die2.innerHTML = d2
    status.innerHTML = diceTotal
    const move = parseInt(status.innerText)
    squares[gamePiece].classList.remove('piece')
    gamePiece += move
    squares[gamePiece].classList.add('piece')

    if (squares[gamePiece] === squares[2]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)


    }
    else if (squares[gamePiece] === squares[3]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    
    }
    else if (squares[gamePiece] === squares[4]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    }
    else if (squares[gamePiece] === squares[5]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    }
    else if (squares[gamePiece] === squares[6]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    }
    else if (squares[gamePiece] === squares[7]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    }
    else if (squares[gamePiece] === squares[8]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    }
    else if (squares[gamePiece] === squares[9]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    }
    else if (squares[gamePiece] === squares[10]) {
      const form = document.getElementById("jersey").className = "visible"
      setTimeout(function(){form.className = "hidden"}, 2000)
    }
    else if (squares[gamePiece] === squares[11]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
    }
    else if (squares[gamePiece] === squares[12]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
    }
    
  }

  // const i = document.getElementById('answer')
  // const value = i.value 
  // const upCase = value.toUpperCase()
  //   if(upCase === "TRENTON") {
  //     const h2 = document.createElement('h2')
  //     h2.innerText = "CORRECT!"
  //     div.appendChild(h2)
  //   }


  const squares = []


  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      if(layout[i] === 0) {
        squares[i].classList.add('dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
    }
  }
  }
  createBoard()

  let gamePiece = 0



   squares[gamePiece].classList.add('piece')



