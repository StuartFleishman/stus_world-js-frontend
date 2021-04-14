fetch("http://127.0.0.1:3000/users")
.then(response => response.json())
.then(data => {
  const li = document.createElement('li')
  const ul = document.getElementById('users')
  data.map(e => {
    li.innerText = e.name
    ul.appendChild(li)
  })
})

