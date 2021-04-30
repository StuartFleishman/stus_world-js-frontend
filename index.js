
// User Stuff 
const ul = document.getElementById('users')
const userForm = document.getElementById('user-form')
const dropdown = document.getElementById('user-dropdown')
const userInput = document.getElementById("user-name")
const secondDropdown = document.getElementById('score-dropdown')

//question
const que = document.getElementById('question-title')


// Comment Stuff 
const ulComments = document.getElementById('comments')
const commentsForm = document.getElementById('comment-form')

//Score Stuff
const ulScores = document.getElementById('scores')
const finalScore = document.getElementById('user-score')
const score = document.getElementById('score')
const scoreForm = document.getElementById("score-form") 
let scoreCount = document.getElementById("score-count")
let scoreDiv = document.getElementById('score-div')


//Save Btn
const save = document.getElementById('save') 

//Choose Number
const pickNumber = document.getElementById('Pick a Number')


//Rest BTN
const reset = document.getElementById('reset')

//Start BTN
const start_button = document.getElementById('start')


//Pick a number between 1-1560
const numForm = document.getElementById('number')

// const h1 = document.getElementById('cat')

// const inputValue = document.getElementById('a')


//Check User Answer
let answerForm = document.getElementById('answer-form')


//EVENT LISTENERS USERS
userForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
  e.preventDefault()
  const commentForm = document.getElementById('comment-form')
  commentForm.classList.remove('hidden')
  commentForm.classList.add('visible')
  UserApi.createUser(e)
  userForm.innerText = "thanks for playing"
}



// scoreForm.addEventListener('submit', handleScoreSubmit)
// function handleScoreSubmit(e) {
//   e.preventDefault()
//   GameScoreApi.createScore(e)
// }

//COMMENT LISTENER
commentsForm.addEventListener('submit', handleCommentSubmit)

function handleCommentSubmit(e) {
  e.preventDefault()
  ulComments.classList.remove('hidden')
  ulComments.classList.add('visible')
  CommentApi.createComment(e)
  commentsForm.reset()
  }

//SAVE STUFF
save.addEventListener('click', handleSave)

function handleSave(e) {
  e.preventDefault()
  console.log(e.target)
  save.innerText = ""
  // const topDiv = document.getElementsByClassName('grid-container')
  // const arrayDiv = Array.from(topDiv)
  // arrayDiv.map( e => e.remove() )

  const pick = document.getElementById("number")
  pick.remove()
  que.remove()
  reset.remove()
  answerForm.remove()

  const hi = document.getElementById('category-title')
  hi.remove()
  const userForm = document.getElementById('make-user')
  userForm.classList.remove('hidden')
  userForm.classList.add('visible')
  const newDiv = document.createElement('div')
  newDiv.id = "new-div"
  document.body.append(newDiv)
  

}

//RESET BTN EVENT
reset.addEventListener('click', handleReset)
function handleReset(e) {
  e.preventDefault()
  const bttn = document.getElementById('reset')
  bttn.innerText = ""
  const categoryRemove = document.getElementById('category-title')
 
  const pTags = categoryRemove.children  
  const pTag = Array.from(pTags) 
  pTag[0].remove()

  const hi = document.getElementById('question-title')
  hi.firstElementChild.remove()

 

  const rightAnswer = document.getElementById('right-answer')
  rightAnswer.id = ""
  rightAnswer.innerText = ""
  

  que.innerText = ""
  



 
  


  const moo = document.getElementById('hello')
  moo.remove()
  to.children[1].remove()
}


//START BTN 
start_button.addEventListener('click', e => {
  e.preventDefault()
  const save = document.getElementById('save') 
  save.classList.remove('hidden')
  save.classList.add('visible')

  scoreDiv.classList.remove('hidden')
  scoreDiv.classList.add('item5')
  scoreDiv.classList.add('visible')

  
  numForm.classList.add('visible')
  numForm.classList.add('center')
  numForm.classList.add('item3')
 
  start_button.classList.add('hidden')

})

//pick a number between 1-1560
numForm.addEventListener('submit', e => {
  e.preventDefault()

  const catNum = (parseInt(e.target.children[1].value))
  TriviaApi.getCategories(catNum)

  que.classList.add('visible')
  answerForm.classList.remove('hidden')
  answerForm.classList.add('visible')
  answerForm.classList.add('item2')
  
  const cat = document.getElementById('category-title')
  cat.innerText = "Category"
  const reset = document.getElementById('reset')
  reset.classList.add('visible')
  reset.innerText = "Reset"
  cat.classList.add('visible')
  const userNumber = document.getElementById('user-number')
  numForm.classList.remove('visible')
  numForm.classList.add('hidden')
  numForm.reset()
})

//check user answer 
answerForm.addEventListener('submit', e => {
  e.preventDefault()
  
  const rightAnswer = document.getElementById('right-answer')
  const rightAnswerCaps = rightAnswer.innerHTML.toUpperCase()
  const userValue = e.target.children[0].value
  const userValueUp = userValue.toUpperCase()
 
  if (rightAnswerCaps === userValueUp.trim()) {
    let scoreCount = document.getElementById("score-count")
    let currentScore = parseInt(scoreCount.innerText)
    let newScore = currentScore += 1
    answerForm.reset()
    return scoreCount.innerText = newScore
  }
  else {
    const right = document.getElementById('right-answer') 
    right.classList.add('visible')
    right.parentElement.firstElementChild.remove()

    answerForm.reset()
 
  }
  answerForm.reset()
})

function addError() {
  const dGrid = document.getElementById("div-grid")
  const div= document.createElement('div')
  div.classList.add('item2')
  div.innerText = "1 Free Point!"
  div.id = "unlucky"

  setTimeout( function() { div.remove() }, 2000)

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

UserApi.getUsers()
