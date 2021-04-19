class CommentApi {

  static commentURL = "http://127.0.0.1:3000/comments"

  static getComments() {
    fetch(this.commentURL)
    .then(response => response.json())
    .then(json => {
      json.forEach(comment => {
        const t = new Comment({text: comment.text})
        t.addToDom()
      })
    })
  }
  
  static createComment(e) {
    const commentData = {
      text: e.target.comment.value
    }
  
    const configObj = {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(commentData)
    }
  
    fetch(this.commentURL, configObj)
    .then(resp => resp.json())
    .then(json => {
      const to = new Comment({text: json.text})
      to.addToDom()
    })
  }

}