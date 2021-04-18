class User {

  static all = []

  constructor({name}) {
    this.name = name 

    const li = document.createElement('li')
    li.id = `user ${user.id}`

    User.all.push(this)
  }


}

function renderUser(user) {
  const li = document.createElement('li')
  li.id = `user ${user.id}`
  li.innerText = user.name
  ul.appendChild(li)
}
