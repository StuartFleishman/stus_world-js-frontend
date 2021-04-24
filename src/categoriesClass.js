// class Categorie {
  
//   static all = []

//   constructor()
// }


const inputValue = document.getElementById('a')
let scoreCount = document.querySelector(".score-count")
const answerArray = [{}]

function getCategories(catNum){
fetch(`https://jservice.io/api/category?id=${catNum}`)
.then(resp => resp.json())
.then(data => {
  const spliceData = data.clues.splice(0,5)
  spliceData.map(category => {
    if (category.question === "[audio]") {
      addError()
    }
    else {
      addQuestion({question: category.question, id: category.id, answer: category.answer})
    }
  })

  const h1 = document.getElementById('cat')
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
  // const clue = document.querySelector(".clue-text")
  const clue = document.getElementById("to")
  let div = document.createElement('div');
  div.innerHTML =(`
  <p> ${question}</p>
  <form class="visible" id="ans" autocomplete="off">
  <input id="a" name="user-answer" type="text" />
  <button type="submit">Answer</button>
  </form>
  `)

  // answerForm.classList.add("visible")

  div.classList.add("grid-item")
  const divAnswer = document.createElement('div')
  divAnswer.id = `${id}`
  answerArray.push(`{id: ${id}, answer: ${answer}`)
  


  divAnswer.classList.add("hidden")
  divAnswer.innerHTML =(`
  <h1> ${answer} </h1>
  `)  
  clue.appendChild(div)
  clue.appendChild(divAnswer)

  // answerForm.addEventListener('submit', e => {
  //   e.preventDefault()
  //   if (e.target.firstElementChild.value.toUpperCase() === answerArray[0].toUpperCase()) {
  //     score.innerHTML += 1
  //   }
  //   else {
  //     addWrong()
  //   }
  //   answerForm.reset()
  // })

}
}
const answerForm = document.getElementById('ans')
answerForm.addEventListener('submit', e => {
  e.preventDefault()
  if (e.target.firstElementChild.value.toUpperCase() === answerArray[0].toUpperCase()) {
    scoreCount.innerHTML += 1
    const b = document.getElementById('cat')
    const say = b.firstElementChild
    say.innerText = ""
    const mo = document.getElementsByClassName('jo')
    const hit = Array.from(mo)
    const us = hit[0]
    us.innerText = ""
  }
  else {
    addWrong()
  }
  answerForm.reset()
})



const form = document.getElementById('number')
form.addEventListener('submit', e => {
  e.preventDefault()
  const question = document.getElementById('question')
  const catNum = question.value 
  getCategories(catNum)
  form.reset()
})
