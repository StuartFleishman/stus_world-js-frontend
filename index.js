const ul = document.getElementById('users')
const userForm = document.getElementById('user-form')
const ulComments = document.getElementById('comments')
const ulScores = document.getElementById('scores')

const reset = document.getElementById('reset')


const commentsForm = document.getElementById('comment-form')
const dropdown = document.getElementById('user-dropdown')
const secondDropdown = document.getElementById('score-dropdown')

const userInput = document.getElementById("user-name")

const score = document.getElementById('score')

const wrong = document.getElementById('wrong')
const right = document.getElementById('right')
const scoreForm = document.getElementById("score-form") 

userForm.addEventListener('submit', handleFormSubmit)
scoreForm.addEventListener('submit', handleScoreSubmit)
commentsForm.addEventListener('submit', handleCommentSubmit)

reset.addEventListener('click', handleReset)

function handleReset(e) {
  h1.firstElementChild.remove()
  const yoko = document.getElementsByTagName('h4')
  const john = Array.from(yoko) 
  john[0].remove()
  const moo = document.getElementById('hello')
  moo.remove()
}

function handleScoreSubmit(e) {
  e.preventDefault()
  GameScoreApi.createScore(e)
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
