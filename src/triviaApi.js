
class TriviaApi {

  static getCategories(catNum){
    fetch(`https://jservice.io/api/category?id=${catNum}`)
    .then(resp => resp.json())
      .then(data => {
  
          const p = document.createElement('p')
          p.innerText= data.title 
          const category = document.getElementById('category-title')
          category.appendChild(p)

    
        const spliceData = data.clues.splice(0,1)
        spliceData.map(trivia => {
          if(trivia.question == "[audio]") {
            addError()
          }
          else {
            console.log('mom')
            answerArray.push(trivia.answer)
            const i = new Trivia({question: trivia.question, id: trivia.id, answer: trivia.answer})
            i.addDom()
          }
        })
        
      }) 
  }


}



function addError() {
  const dGrid = document.getElementById("div-grid")
  const div= document.createElement('div')
  div.classList.add('item2')
  div.innerText = "Unlucky Number, Roll Again!"
  div.id = "unlucky"
  dGrid.appendChild(div)
  const categoryRemove = document.getElementById('category-title')
  const pTags = categoryRemove.children  
  const pTag = Array.from(pTags) 
  pTag[0].remove()
  const ct = document.getElementById('category-title')
  ct.innerText = ""
  addScore()
}

function addScore() {
  let sCount = document.getElementById("score-count")
  let newestScore = sCount.innerText
  let currentScore = parseInt(newestScore)
  let finalScore = currentScore += 1
  return sCount.innerText = finalScore
}

function addQuestion({question, id, answer}) {
  const divGrid = document.getElementById("div-grid")
  let div = document.createElement('div');

  div.classList.add('item2')
  div.innerHTML =(`
  <h4> ${question}</h4>
  <form class="item2" class="visible" id="hello" autocomplete="off">
  <label class="hidden">${answer}</label>
  <input id="a" name="user-answer" type="text" />
  <button type="submit">Answer</button>
  </form>
  `)
  divGrid.appendChild(div)


  // div.classList.add("grid-item")
  answerArray.push(`${answer}}`)
   
  divGrid.appendChild(div)


  const q = document.getElementsByClassName('ans')



 

 }




