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
      <p id="answer" class="hidden"> The right answer is </p>
      <p id="right-answer" class="hidden">${this.answer}</p>
      <br>
      <h5>Category</h5>
      <h6>${this.title}</h6>
    `

    return this.element
  }

  // addTitle() {
  //   const p = document.createElement('p')
  //   p.innerText= `${this.title}` 
  //   category.appendChild(p)
  // }

  addDom() {
    que.appendChild(this.render())
  }



}