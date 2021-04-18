const ul = document.getElementById('users')
const form = document.getElementById('user-form')


form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
  e.preventDefault()
  UserApi.createUser(e)
  form.reset()
}

UserApi.getUsers()
