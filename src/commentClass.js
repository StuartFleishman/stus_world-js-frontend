class Comment {

  static all = []


  constructor({text, user_id}) {
    this.text = text 
    this.userId = user_id 
    this.element = document.createElement('li')
    Comment.all.push(this)
    
  }

  render() {

    this.element.innerHTML = `
      <h4>
      <strong>${this.text}</strong>
      </h4> 
    `
    return this.element
  }

  addToDom() {
    ulComments.appendChild(this.render())
  }

  addToUc() {
    const h2 = document.getElementById('comment-list')
    ulComments.appendChild(this.render())
  }

  // static renderFiltered(userArray) {
  //   debugger
  //   userArray.forEach(user => {
  //     const li = document.createElement('li')
  //     li.innerHTML = `
  //     <h1> ${this.name} </h1>
  //     <h4> ${user.text} </h4>
  //     `
  //     ulComments.append(li)
  //   })
  // }


}