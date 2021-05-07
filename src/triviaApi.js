
class TriviaApi {

  static getCategories(catNum){
    fetch(`https://jservice.io/api/category?id=${catNum}`)
    .then(resp => resp.json())
      .then(data => {
          const title = data.title
          addTitle(title)
        
          const spliceData = data.clues.splice(0,1)
            spliceData.map(trivia => {
              if(trivia.question === "[audio]" || trivia.question === "") {
                addFreePoint()
              }
              else {
                const t = new Trivia({question: trivia.question, id: trivia.id, answer: trivia.answer})
                t.addDom()
              }
            })
        
      }) 
  }


}





