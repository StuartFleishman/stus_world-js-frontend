const ul = document.getElementById('users')
const form = document.getElementById('user-form')
const ulComments = document.getElementById('comments')
const commentsForm = document.getElementById('comment-form')
const dropdown = document.getElementById('user-dropdown')
const userInput = document.getElementById("user-name")
const jerseyForm = document.getElementById('jersey')
const jerseyAnswer = document.getElementById('answer')
const score = document.getElementById('score')

form.addEventListener('submit', handleFormSubmit)
commentsForm.addEventListener('submit', handleCommentSubmit)
jerseyForm.addEventListener('submit', jerseySubmit)

function jerseySubmit(e) {
  e.preventDefault()
  const answer = jerseyAnswer.value 
  const capitilizeAnswer = answer.toUpperCase()
  checkAnswer(capitilizeAnswer)
  jerseyForm.className = "hidden"
}

function checkAnswer(c) {
  if (c === "TRENTON") {
    score.innerText += 1
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
