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
    // let obj = {}
    // obj = User.findById(this.user_id)
    // let hi = obj.name
    this.element.innerHTML = 
    `
      <div>${Comment.obj.name}
      <strong class="name" id="${this.user_id}">${this.text}</strong>
      </div> 
    `
    return this.element
  }

  addToDom() {
    ulComments.appendChild(this.render())
  }


}