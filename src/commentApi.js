class CommentApi {

  static commentURL = "http://127.0.0.1:3000/comments"

  static getComments() {
    fetch(this.commentURL)
    .then(response => response.json())
    .then(json => {
      json.data.forEach(comment => {
        const t = new Comment({text: comment.attributes.text})
        t.addToDom()
      })
    })
  }
  
  static createComment(e) {
    const commentData = {
      text: e.target.comment.value,
      user_id: dropdown.value
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
      const newComment = json.data
      const to = new Comment({text: newComment.attributes.text, userID: newComment.attributes.user_id})
      to.addToDom()
    })
  }

}