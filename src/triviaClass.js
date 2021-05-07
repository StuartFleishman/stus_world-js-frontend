class Trivia {

  static all = []

  constructor({question, id, answer, title}) {
    this.question = question
    this.id = id
    this.answer = answer
    this.title = title


    this.element = document.createElement('div')

  }


  render() {
    this.element.innerHTML = `
      <p>${this.question}</p>
      <p id="right-answer" class="hidden">${this.answer}</p>
    `

    return this.element
  }

  addDom() {
    que.appendChild(this.render())
  }



}