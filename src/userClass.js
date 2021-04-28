class User {

  static all = []

  constructor({id, name, game_score}) {
    this.id = id
    this.name = name 
    this.game_score = game_score
    this.element = document.createElement('li')


    User.all.push(this)
  }

  renderUser() {
    this.element.innerHTML = `
      <div data-set=${this.id}> 
      <strong class="name">${this.name}</strong><span>
      </div> 
    `

    return this.element
  }

  attachToDom() {
    const newDiv = document.getElementById('new-div')
    newDiv.appendChild(this.renderUser())
  }

  addList(){
    const option = document.createElement('option')
    option.value  = this.id 
    option.innerText = this.name
    dropdown.append(option)
}

addSecondList(){
  const option = document.createElement('option')
  option.value  = this.id 
  option.innerText = this.name
  secondDropdown.append(option)
}


}

