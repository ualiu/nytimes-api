document.querySelector('button').addEventListener('click', getFetch) 

function getFetch(){
let userKeyword = document.querySelector('input').value.toLocaleLowerCase() 
console.log(userKeyword) 
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userKeyword}&api-key=k6TOATzxVABq9fEggG8dcz9gNkeG1iPk` //

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        let articles = data.response.docs;
        for (article of articles) {

          h2 = document.createElement('h2')
          h2.innerText = article.headline.main
          container.appendChild(h2)

          h3 = document.createElement('h3')
          h3.innerText = article.snippet
          container.appendChild(h3)

          span = document.createElement('span')
          span.innerText = article.pub_date
          container.appendChild(span)

          h4 = document.createElement('h4')
          h4.innerText = article.web_url
          container.appendChild(h4)

        }
      }
                
      )
      .catch(err => {
          console.log(`error ${err}`)
      });

}


