class User {

  static all = []

  constructor({name}) {
    this.name = name 
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

