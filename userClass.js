class User {

  static all = []

  constructor({name}) {
    this.name = name 

    debugger 
    this.element = document.createElement('li')


    User.all.push(this)
  }

  renderUser() {
    this.element.innerHTML = `
      <div> 
      <strong class="name">${this.name}</strong>
      </div> 
    `

    return this.element
  }

  attachToDom() {
    ul.appendChild(this.renderUser())
  }


}

// function renderUser(user) {
//   const li = document.createElement('li')
//   li.id = `user ${user.id}`
//   li.innerText = user.name
//   ul.appendChild(li)
// }
