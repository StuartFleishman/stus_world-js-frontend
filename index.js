const baseURL = "http://127.0.0.1:3000"
const usersURL = baseURL + '/users'


const ul = document.getElementById('users')
const form = document.getElementById('user-form')

function getUsers() {
fetch(usersURL)
.then(response => response.json())
.then(renderUsers)
} 

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

  fetch(usersURL, configObj)
  .then(resp => resp.json())
  .then(data => console.log(data))
}

function renderUsers(json) {
  json.map(user => {
    renderUser(user)
  })
}

function renderUser(user) {
  const li = document.createElement('li')
  li.innerText = user.name
  ul.appendChild(li)
}

getUsers()
