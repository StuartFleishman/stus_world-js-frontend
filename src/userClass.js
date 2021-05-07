class User {

  static all = []

  constructor({id, name}) {
    this.id = id
    this.name = name 
    this.element = document.createElement('li')


    User.all.push(this)
  }


  addList(){
    const option = document.createElement('option')
    option.value  = this.id 
    option.innerText = this.name
    dropdown.append(option)
  }

  
static findById(userId){
    return User.all.find( user => {
      return parseInt(user.id) === userId
    })
}


}



