

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

}


