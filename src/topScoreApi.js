class topScoreApi {

  static baseURL = "http://127.0.0.1:3000/game_scores/top_scores"

  static getTopScores() {
    fetch(this.baseURL)
    .then(response => response.json())
    .then(json => {
      json.data.map(gameScore => {
        const i = new GameScore({score: gameScore.score, user_id: gameScore.user_id})
        i.attachToDom()
        i.addList()
        i.addSecondList()
      })
    })
  }

}