const ul = document.getElementById('users')
const form = document.getElementById('user-form')
const comments = document.getElementById('comments')

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
  e.preventDefault()
  UserApi.createUser(e)
  CommentApi.createComment(e)
  form.reset()
}

UserApi.getUsers()
CommentApi.getComments()
