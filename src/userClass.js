class User {

  static all = []

  constructor({id, name}) {
    this.id = id
    this.name = name 
    this.element = document.createElement('li')


    User.all.push(this)
  }

  static comments() {
    return Comment.all.filter( e => e.user_id === parseInt(dropdown.value))
  }

  static addComments(){
    const h2 = document.getElementById('comment-list')
    const u = User.all.find( u => parseInt(u.id) === parseInt(dropdown.value))
    ulComments.innerText = `${u.name}`
    const userComments = User.comments()
    userComments.map(comment => {
      const li = document.createElement('li')
      li.innerHTML = `
      <h4> ${comment.text}
      `
      ulComments.append(li)
    })
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



