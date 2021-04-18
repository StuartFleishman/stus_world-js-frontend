class User {

  static all = []

  constructor({id, name}) {
    this.name = name 
    this.id = id
    
    this.element = document.createElement('li')
    this.element.id = `user-${id}`

    User.all.push(this)
  }

  renderUser(li) {
    this.element.innerHTML = `
      <div user-id="${this.id}"> 
      <strong class="name">${this.name}</strong>
      </div> 
    `
  }


}

function renderUser(user) {
  const li = document.createElement('li')
  li.id = `user ${user.id}`
  li.innerText = user.name
  ul.appendChild(li)
}
