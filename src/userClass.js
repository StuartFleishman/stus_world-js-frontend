class User {

  static all = []

  constructor({id, name}) {
    this.id = id
    this.name = name 
    this.element = document.createElement('li')


    User.all.push(this)
  }

  // renderUser() {
  //   this.element.innerHTML = `
  //     <div data-set=${this.id}> 
  //     <strong class="name">${this.name}</strong><span>
  //     </div> 
  //   `

  //   return this.element
  // }


  addList(){
    const option = document.createElement('option')
    option.value  = this.id 
    option.innerText = this.name
    dropdown.append(option)
}

  
static findById(userId){
    return User.all.find( e => {
      return parseInt(e.id) === userId
    })
  }


}



