

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
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
      const div = document.getElementById('test')
      div.innerHTML = `
      <form>
      <label for="user">What is the capital of New Jersey?</label>
      <input type=text>
      <input type="Submit" value="Submit">
      </form>
    `
    }
    else if (squares[gamePiece] === squares[3]) {
      const div = document.getElementById('test')
      div.innerHTML = `
      <form>
      <label for="user">What is the capital of New Jersey?</label>
      <input type=text>
      <input type="Submit" value="Submit">
      </form>
    `
    }
    else if (squares[gamePiece] === squares[4]) {
      const div = document.getElementById('test')
      div.innerHTML = `
      <form>
      <label for="user">What is the capital of New Jersey?</label>
      <input type=text>
      <input type="Submit" value="Submit">
      </form>
    `
    }
    else if (squares[gamePiece] === squares[5]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
    }
    else if (squares[gamePiece] === squares[6]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
    }
    else if (squares[gamePiece] === squares[7]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
    }
    else if (squares[gamePiece] === squares[8]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
    }
    else if (squares[gamePiece] === squares[9]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
    }
    else if (squares[gamePiece] === squares[10]) {
      const h2 = document.createElement('h2')
      const div = document.getElementById('test')
      h2.innerText = "What is the capital of New Jersey?"
      div.appendChild(h2)
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

  function movePiece(e) {
    squares[gamePiece].classList.remove('piece')
    switch(e.keyCode) {
      case 37:
        if(
          gamePiece % width !== 0 &&
          !squares[gamePiece -1].classList.contains('wall')
          )
          gamePiece -= 1
        if (squares[gamePiece -1] === squares[363]) {
          gamePiece = 391
          const h2 = document.createElement('h2')
          const div = document.getElementById('test')
          h2.innerText = "What is the capital of New Jersey?"
          div.appendChild(h2)
        }
        break
      case 38:
        if(
          gamePiece- width >= 0 &&
          !squares[gamePiece -width].classList.contains('wall')
          ) 
          gamePiece -= width
        break
      case 39:
        if(
          gamePiece% width < width - 1 &&
          !squares[gamePiece +1].classList.contains('wall')
        )
        gamePiece += 1
        if (squares[gamePiece+1] === squares[392]) {
          gamePiece= 364
        }
        break
      case 40:
        if (
          gamePiece+ width < width * width &&
          !squares[gamePiece +width].classList.contains('wall')
        )
        gamePiece += width
        break
    }
    squares[gamePiece].classList.add('piece')
  }
  document.addEventListener('keyup', movePiece)

