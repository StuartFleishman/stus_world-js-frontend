// const baseURL = "http://127.0.0.1:3000"
// const usersURL = baseURL + '/users'


const ul = document.getElementById('users')
const form = document.getElementById('user-form')


// function getUsers() {
// fetch(usersURL)
// .then(response => response.json())
// .then(renderUsers)
// } 

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
  e.preventDefault()
  const userData = {
    name: e.target.user.value
  }

  const configObj = {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userData)
  }

  fetch("http://127.0.0.1:3000/users", configObj)
  .then(resp => resp.json())
  .then(user => {
    const i = new User({name: user.name})
    debugger
    i.attachToDom()
    form.reset()
  })
}

// function renderUsers(json) {
//   json.map(user => {
//     const i = new User({name: user.name})
//     i.attachToDom()
//   })




UserApi.getUsers()
