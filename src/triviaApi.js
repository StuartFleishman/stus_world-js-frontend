
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
      const spliceData = data.clues.splice(0,1)
      newData = {...spliceData}
      spliceData.map(category => {
        if (category.question === "[audio]") {
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
  h1.appendChild(p)
  
})

function addError() {
  const clue = document.querySelector(".clue-text")
  const li = document.createElement('li')
  li.innerText = "This question is Audio, please choose a different number, SORRY!"
  clue.appendChild(li)
}

function addQuestion({question, id, answer}) {
  const clue = document.getElementById("to")
  let div = document.createElement('div');
  div.innerHTML =(`
  <h4> ${question}</h4>
  <form class="visible" id="hello" autocomplete="off">
  <label class="hidden">${answer}</label>
  <input id="a" name="user-answer" type="text" />
  <button type="submit">Answer</button>
  </form>
  `)


  // div.classList.add("grid-item")
  answerArray.push(`${answer}}`)
   
  clue.appendChild(div)


  const q = document.getElementsByClassName('ans')

  let answerForm = document.getElementById('hello')

  answerForm.addEventListener('submit', e => {
    e.preventDefault()
    const hidden = e.target.firstElementChild.innerHTML
    const hiddenUp = hidden.toUpperCase()
    const userValue = e.target.children[1].value
    const userValueUp = userValue.toUpperCase()
    if (hiddenUp === userValueUp.trim()) {
      let scoreCount = document.querySelector(".score-count")
      answerForm.reset()
      return scoreCount.innerHTML += 1
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
  const question = document.getElementById('question')
  const catNum = question.value 
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

