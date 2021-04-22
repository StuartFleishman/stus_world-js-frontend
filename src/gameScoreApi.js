class gameScoreApi {

  static baseURL = "http://127.0.0.1:3000/game_scores"

  static createScore(e) {
    debugger
    const scoreData = {
      score: e.target.user.value
    }
  
    const configObj = {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userData)
    }
  
    fetch(this.baseURL, configObj)
    .then(resp => resp.json())
    .then(user => {
      const i = new User({id: user.id, name: user.name, user: user.score})
      i.attachToDom()
      i.addToDropDown()
    })
  }

}
