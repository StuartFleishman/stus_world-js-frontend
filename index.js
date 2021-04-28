const ul = document.getElementById('users')
const userForm = document.getElementById('user-form')
const ulComments = document.getElementById('comments')
const ulScores = document.getElementById('scores')

// const save = document.getElementById('save') 

const pickNumber = document.getElementById('Pick a Number')

const finalScore = document.getElementById('user-score')

const reset = document.getElementById('reset')

const start_button = document.getElementById('start')


const commentsForm = document.getElementById('comment-form')
const dropdown = document.getElementById('user-dropdown')
const secondDropdown = document.getElementById('score-dropdown')

const userInput = document.getElementById("user-name")

const score = document.getElementById('score')

const wrong = document.getElementById('wrong')
const right = document.getElementById('right')
const scoreForm = document.getElementById("score-form") 

userForm.addEventListener('submit', handleFormSubmit)
// scoreForm.addEventListener('submit', handleScoreSubmit)
// commentsForm.addEventListener('submit', handleCommentSubmit)

function handleFormSubmit(e) {
  e.preventDefault()
  UserApi.createUser(e)
  userForm.reset()
}

save.addEventListener('click', handleSave)

function handleSave(e) {
  e.preventDefault()
  save.innerText = ""
  const topDiv = document.getElementsByClassName('grid-container')
  const arrayDiv = Array.from(topDiv)
  arrayDiv.map( e => e.remove() )
  const userForm = document.getElementById('make-user')
  userForm.classList.remove('hidden')
  userForm.classList.add('visible')

}

reset.addEventListener('click', handleReset)



start_button.addEventListener('click', e => {
  e.preventDefault()
  const save = document.getElementById('save') 
  save.classList.remove('hidden')
  save.classList.add('visible')

  const form = document.getElementById('number')
  form.classList.add('visible')
  start_button.classList.add('hidden')

})


function handleReset(e) {
  e.preventDefault()
  const bttn = document.getElementById('reset')
  // bttn.classList.add("hidden")
  bttn.innerText = ""
  const categoryRemove = document.getElementById('category-title')
  const pTags = categoryRemove.children  
  const pTag = Array.from(pTags) 
  pTag[0].remove()


  
  const h4 = document.getElementsByTagName('h4')
  const removeh4 = Array.from(h4) 
  removeh4[0].remove()


  const moo = document.getElementById('hello')
  moo.remove()
  to.children[1].remove()
}

function handleScoreSubmit(e) {
  e.preventDefault()
  GameScoreApi.createScore(e)
}




// function handleFormSubmit(e) {
//   e.preventDefault()
//   UserApi.createUser(e)
//   userForm.reset()
// }

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
