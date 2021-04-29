class CommentApi {

  static commentURL = "http://127.0.0.1:3000/comments"

  static getComments() {
    fetch(this.commentURL)
    .then(response => response.json())
    .then(json => {
      json.data.forEach(comment => {
        const t = new Comment({text: comment.attributes.text, user_id: comment.attributes.user_id})
        t.addToDom()
      })
    })
  }
  
  static createComment(e) {
    const commentData = {
      text: e.target.comment.value,
      user_id: parseInt(dropdown.value)
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
      const to = new Comment({text: newComment.attributes.text, user_id: newComment.attributes.user_id})
      to.addToDom()
    })
  }

}