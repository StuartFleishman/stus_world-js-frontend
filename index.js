const ul = document.getElementById('users')


function getUsers() {
fetch("http://127.0.0.1:3000/users")
.then(response => response.json())
.then(renderUsers)
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
