class Comment {

  static all = []

  constructor({text}) {
    this.text = text 
    this.element = document.createElement('li')
    Comment.all.push(this)
  }

  render() {
    this.element.innerText = this.text 
    return this.text 
  }

  addToDom() {
    comments.appendChild(this.render())
  }


}