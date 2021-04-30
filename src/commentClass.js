class Comment {

  static all = []
  static obj = {}

  constructor({text, user_id}) {
    this.text = text 
    this.user_id = user_id 
    this.element = document.createElement('div')
    Comment.all.push(this)
    
    
    Comment.obj = {...User.findById(user_id)}
  }

  render() {

    this.element.innerHTML = `
      <div>${Comment.obj.name}
      <h6>Wrote</h6>
      <strong>"${this.text}"</strong>
      </div> 
    `
    return this.element
  }

  addToDom() {
    ulComments.appendChild(this.render())
  }


}