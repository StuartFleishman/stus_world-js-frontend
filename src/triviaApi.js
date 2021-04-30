
class TriviaApi {

  static getCategories(catNum){
    fetch(`https://jservice.io/api/category?id=${catNum}`)
    .then(resp => resp.json())
      .then(data => {
          const title = data.title
        addTitle(title)
        function addTitle(title) {
          const p = document.createElement('p')
          p.innerText= title 
          const category = document.getElementById('category-title')
          category.appendChild(p)
        }
        
        const spliceData = data.clues.splice(0,1)
        spliceData.map(trivia => {
          if(trivia.question == "[audio]") {
            addError()
          }
          else {
            const i = new Trivia({question: trivia.question, id: trivia.id, answer: trivia.answer})
            i.addDom()
          }
        })
        
      }) 
  }


}





