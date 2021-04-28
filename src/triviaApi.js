
let newData = {}

const numForm = document.getElementById('number')

const h1 = document.getElementById('cat')

const inputValue = document.getElementById('a')
let scoreCount = document.querySelector(".score-count")
let answerForm = document.getElementById('hello')
const answerArray = []

function getCategories(catNum){
  fetch(`https://jservice.io/api/category?id=${catNum}`)
  .then(resp => resp.json())
    .then(data => {
      
      console.log(data.clues)
      const spliceData = data.clues.splice(0,1)
      spliceData.map(category => {
        if (category.question == "[audio]") {
          addError()
        }
        else {
          addQuestion({question: category.question, id: category.id, answer: category.answer})
        }
      })

  // const h1 = document.getElementById('cat')
  const p = document.createElement('p')
  const title = data.title
  p.innerText= title 
  const category = document.getElementById('category-title')
  category.appendChild(p)
  
})

function addError() {
  const dGrid = document.getElementById("div-grid")
  const div= document.createElement('div')
  div.classList.add('item2')
  div.innerText = "Unlucky Number, Roll Again!"
  dGrid.appendChild(div)
  const categoryRemove = document.getElementById('category-title')
  const pTags = categoryRemove.children  
  const pTag = Array.from(pTags) 
  pTag[0].remove()
  const ct = document.getElementById('category-title')
  ct.innerText = ""
  addScore()
}

function addScore() {
  let sCount = document.getElementById("score-count")
  let newestScore = sCount.innerText
  let currentScore = parseInt(newestScore)
  let finalScore = currentScore += 1
  return sCount.innerText = finalScore
}

function addQuestion({question, id, answer}) {
  const divGrid = document.getElementById("div-grid")
  let div = document.createElement('div');
  div.classList.add('item2')
  div.innerHTML =(`
  <h4> ${question}</h4>
  <form class="visible" id="hello" autocomplete="off">
  <label class="hidden">${answer}</label>
  <input id="a" name="user-answer" type="text" />
  <button type="submit">Answer</button>
  </form>
  `)
  divGrid.appendChild(div)


  // div.classList.add("grid-item")
  answerArray.push(`${answer}}`)
   
  divGrid.appendChild(div)


  const q = document.getElementsByClassName('ans')

  let answerForm = document.getElementById('hello')

  answerForm.addEventListener('submit', e => {
    e.preventDefault()
    const hidden = e.target.firstElementChild.innerHTML
    const hiddenUp = hidden.toUpperCase()
    const userValue = e.target.children[1].value
    const userValueUp = userValue.toUpperCase()
    if (hiddenUp === userValueUp.trim()) {
      let scoreCount = document.getElementById("score-count")
      let currentScore = parseInt(scoreCount.innerText)
      let newScore = currentScore += 1
      answerForm.reset()
      return scoreCount.innerText = newScore
    }
    else {
      console.log('not working')
    }
    answerForm.reset()
  })

 
 
  // const me = Array.from(q)

  // me.forEach( e => {

  //   e.addEventListener('submit', e => {
  //   e.preventDefault()
  //   const hidden = e.target.firstElementChild.innerHTML
  //   const hiddenUp = hidden.toUpperCase()
  //   const userValue = e.target.children[1].value
  //   const userValueUp = userValue.toUpperCase()
  //   if (hiddenUp === userValueUp) {
  //     debugger 
  //     let scoreCount = document.querySelector(".score-count")
  //     return scoreCount.innerHTML += 1
  //   }
  //   else {
  //     console.log('not working')
  //   }
  //   answerForm.reset()
  // })
// })
 }
}


numForm.addEventListener('submit', e => {
  e.preventDefault()
  const cat = document.getElementById('category-title')
  const reset = document.getElementById('reset')
  reset.classList.add('visible')
  reset.innerText = "Reset"
  cat.classList.add('visible')
  const userNumber = document.getElementById('user-number')
  const catNum = (parseInt(e.target.children[1].value))
  numForm.classList.remove('visible')
  numForm.classList.add('hidden')
  getCategories(catNum)
  numForm.reset()
})

// answerForm.addEventListener('submit', e => {
//   debugger
//   e.preventDefault()
//   const hidden = e.target.firstElementChild.innerHTML
//   const hiddenUp = hidden.toUpperCase()
//   const userValue = e.target.children[1].value
//   const userValueUp = userValue.toUpperCase()
//   if (hiddenUp === userValueUp) {
//     debugger 
//     let scoreCount = document.querySelector(".score-count")
//     return scoreCount.innerHTML += 1
//   }
//   else {
//     console.log('not working')
//   }
//   answerForm.reset()
// })

