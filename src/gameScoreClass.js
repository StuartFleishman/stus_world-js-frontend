class GameScore {

  static all = []

  constructor({id, score, user_id}) {
    this.id = id
    this.user_id = user_id
    this.score = score
    this.element = document.createElement('li')


    GameScore.all.push(this)
  }

  renderUser() {
    this.element.innerHTML = `
      <div data-set=${this.user_id}> 
      <strong class="name">${this.score}</strong><span>
      </div> 
    `

    return this.element
  }

  attachToDom() {
    ulScores.appendChild(this.renderUser())
  }


}
