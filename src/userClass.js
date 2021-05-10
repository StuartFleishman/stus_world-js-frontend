class User {

  static all = []

  constructor({id, name}) {
    this.id = id
    this.name = name 
    this.element = document.createElement('li')


    User.all.push(this)
  }

  comments() {
    return Comment.all.filter( com => com.userId === parseInt(this.id))
  }

  // renderComment(text) {
  //   ulComments.innerHTML = `
  //   <h3> ${text} </h3>
  //   `
  // }

 renderC() {
  const commentArray = this.comments()

    commentArray.forEach(comment => {
      const li = document.createElement('li')
      li.id = this.id 
      li.innerHTML = `
      <h4> ${comment.text} </h4>
      `
      ulComments.append(li)
    })
   }


  static addComments(){
    const h2 = document.getElementById('comment-list')
    const u = User.all.find( u => parseInt(u.id) === parseInt(dropdown.value))
    ulComments.innerText = `${u.name}`
    const userComments = this.comments()
    userComments.map(comment => {
      const li = document.createElement('li')
      li.innerHTML = `
      <h4> ${comment.text} </h4>
      `
      ulComments.append(li)
    })
  }

  addToC() {
    ulComments.append(this.comments())
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



