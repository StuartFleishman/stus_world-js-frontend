class UserApi {


  static baseURL = "http://127.0.0.1:3000/users"

  static getUsers() {
    fetch(this.baseURL)
    .then(response => response.json())
    .then(json => {
      json.data.map(user => {
        const i = new User({id: user.id, name: user.attributes.name})
        i.addList()
        i.renderC()
        // i.comments()
      })
      // CommentApi.getComments()
    })

  }

  static getUserComments() {
    fetch(this.baseURL)
    .then(response => response.json())
    .then(json => {
      json.data.map(user => {
        const i = new User({id: user.id, name: user.attributes.name})
        i.renderC()
      })
    })

  }

  
  static createUser(e) {
    const userData = {
      name: e.target.user.value
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
      let userId = user.data.id 
        const i = new User({id: userId, name: user.data.attributes.name})
        i.addList()
        window.alert("Name created, select from dropdown")
        removeHidden()
    })
    .catch(error => {
      window.alert(error)
    })
    
  }

}


