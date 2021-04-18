class UserApi {

  static baseURL = "http://127.0.0.1:3000/users"

  static getUsers() {
    fetch(this.baseURL)
    .then(response => response.json())
    .then(json => {
      json.map(user => {
        const i = new User({name: user.name})
        i.attachToDom()
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
      const i = new User({name: user.name})
      i.attachToDom()
    })
  }

}


