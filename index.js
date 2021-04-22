const ul = document.getElementById('users')
const form = document.getElementById('user-form')
const ulComments = document.getElementById('comments')
const ulScores = document.getElementById('scores')
const commentsForm = document.getElementById('comment-form')
const dropdown = document.getElementById('user-dropdown')
const userInput = document.getElementById("user-name")
const jerseyForm = document.getElementById('jersey')
const jerseyAnswer = document.getElementById('answer')
const score = document.getElementById('score')
const wrong = document.getElementById('wrong')
const right = document.getElementById('right')
const scoreForm = document.getElementById("score-form") 

form.addEventListener('submit', handleFormSubmit)
scoreForm.addEventListener('submit', handleScoreSubmit)
commentsForm.addEventListener('submit', handleCommentSubmit)
jerseyForm.addEventListener('submit', jerseySubmit)

function handleScoreSubmit(e) {
  e.preventDefault()
  GameScoreApi.createUser(e)
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
  form.reset()
}

function handleCommentSubmit(e) {
  e.preventDefault()
  CommentApi.createComment(e)
  form.reset()
}


UserApi.getUsers()
CommentApi.getComments()
