const li = document.createElement('li')
const ul = document.getElementById('users')


fetch("http://127.0.0.1:3000/users")
.then(response => response.json())
.then(renderUsers)

function renderUsers(json) {
  json.map(e => {
    li.innerText = e.name
    ul.appendChild(li)
  })
}

