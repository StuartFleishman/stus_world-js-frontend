
// User Stuff 
const ul = document.getElementById('users')
const userForm = document.getElementById('user-form')
const dropdown = document.getElementById('user-dropdown')
const userInput = document.getElementById("user-name")
const secondDropdown = document.getElementById('score-dropdown')


// Comment Stuff 
const ulComments = document.getElementById('comments')
const commentsForm = document.getElementById('comment-form')

//Score Stuff
const ulScores = document.getElementById('scores')
const finalScore = document.getElementById('user-score')
const score = document.getElementById('score')
const scoreForm = document.getElementById("score-form") 

//Save Btn
const save = document.getElementById('save') 

//Choose Number
const pickNumber = document.getElementById('Pick a Number')


//Rest BTN
const reset = document.getElementById('reset')

//Start BTN
const start_button = document.getElementById('start')

//Right & Wrong Btns(not using )
const wrong = document.getElementById('wrong')
const right = document.getElementById('right')


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


//START BTN 
start_button.addEventListener('click', e => {
  e.preventDefault()
  const save = document.getElementById('save') 
  save.classList.remove('hidden')
  save.classList.add('visible')

  const form = document.getElementById('number')
  form.classList.add('visible')
  start_button.classList.add('hidden')

})


// UserApi.getUsers()
CommentApi.getComments()
