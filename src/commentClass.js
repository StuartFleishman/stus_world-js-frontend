class Comment {

  static all = []
  static obj = {}

  constructor({text, user_id}) {
    this.text = text 
    this.user_id = user_id 
    this.element = document.createElement('li')
    Comment.all.push(this)
    
    
    Comment.obj = {...User.findById(user_id)}
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


}