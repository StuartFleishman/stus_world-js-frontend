const ul = document.getElementById('users')
const form = document.getElementById('user-form')
const ulComments = document.getElementById('comments')
const commentsForm = document.getElementById('comment-form')
const dropdown = document.getElementById('user-dropdown')
const userInput = document.getElementById("user-name")


form.addEventListener('submit', handleFormSubmit)
commentsForm.addEventListener('submit', handleCommentSubmit)

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
