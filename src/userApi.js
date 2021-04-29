class UserApi {

  static baseURL = "http://127.0.0.1:3000/users"

  static getUsers() {
    fetch(this.baseURL)
    .then(response => response.json())
    .then(json => {
      json.data.map(user => {
        const i = new User({id: user.id, name: user.attributes.name})
        i.attachToDom()
        i.addList()
        i.addSecondList()
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
      const newUser = user.data
      const i = new User({id: newUser.id, name: newUser.attributes.name})
      // i.attachToDom()
      i.addList()
      i.addSecondList()
    })
  }

}


