

class UserApi {

  static baseURL = "http://127.0.0.1:3000/users"

  getUsers() {
    fetch(baseURL)
    .then(response => response.json())
    .then(renderUsers)
    } 

}