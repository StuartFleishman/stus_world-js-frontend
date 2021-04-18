class CommentApi {

  static baseURL = "http://127.0.0.1:3000/comments"

  static getComments() {
    fetch(this.baseURL)
    .then(response => response.json())
    .then(json => {
      json.map(comment => {
        const i = new Comment({text: comment.text})
        i.addToDom()
      })
    })
  }
  
  static createComment(e) {
    const commentData = {
      name: e.target.comment.value
    }
  
    const configObj = {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(commentData)
    }
  
    fetch(this.baseURL, configObj)
    .then(resp => resp.json())
    .then(comment => {
      const i = new Comment({text: comment.text})
      i.addToDom()
    })
  }

}