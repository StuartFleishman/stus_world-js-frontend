const ul = document.getElementById('users')
const userForm = document.getElementById('user-form')
const ulComments = document.getElementById('comments')
const ulScores = document.getElementById('scores')


const commentsForm = document.getElementById('comment-form')
const dropdown = document.getElementById('user-dropdown')
const secondDropdown = document.getElementById('score-dropdown')

const userInput = document.getElementById("user-name")

const jerseyForm = document.getElementById('jersey')

const jerseyAnswer = document.getElementById('answer')

const score = document.getElementById('score')

const wrong = document.getElementById('wrong')
const right = document.getElementById('right')
const scoreForm = document.getElementById("score-form") 

userForm.addEventListener('submit', handleFormSubmit)
scoreForm.addEventListener('submit', handleScoreSubmit)
commentsForm.addEventListener('submit', handleCommentSubmit)
jerseyForm.addEventListener('submit', jerseySubmit)

function handleScoreSubmit(e) {
  e.preventDefault()
  GameScoreApi.createScore(e)
}

function jerseySubmit(e) {
  e.preventDefault()
  const answer = jerseyAnswer.value 
  const capitilizeAnswer = answer.toUpperCase()
  checkAnswer(capitilizeAnswer)
  jerseyForm.className = "hidden"
}

function checkAnswer(c) {
  if (c === "TRENTON") {
    right.className = "visible"
    score.innerText += 1
  }
  else {
    wrong.className = "visible"
  }
}

function handleFormSubmit(e) {
  e.preventDefault()
  UserApi.createUser(e)
  userForm.reset()
}

function handleCommentSubmit(e) {
  e.preventDefault()
  CommentApi.createComment(e)
  commentsForm.reset()
}

const start_btn = document.querySelector(".start_btn button")

// start_btn.addEventListener('click', e => {
//   const yoyo = document.getElementById('hi')
//   yoyo.className = "visible"
//   start_btn.className = "hidden"
//    })


UserApi.getUsers()
CommentApi.getComments()
