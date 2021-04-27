class GameScoreApi {

  static baseURL = "http://127.0.0.1:3000/game_scores"

  static createScore(e) {
    const scoreData = {
      score: parseInt(scoreCount.innerText),
      user_id: secondDropdown.value 
    }
  
    const configObj = {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(scoreData)
    }
  
    fetch(this.baseURL, configObj)
    .then(resp => resp.json())
    .then(score => {
      const i = new GameScore({id: score.data.id, score: score.data.attributes.score, user_id: score.data.attributes.user_id})
      i.attachToScores()
    })
  }

}
