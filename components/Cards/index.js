// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => { 

  })
  .catch(err => { 
    document.body.innerText = error.message;
  });

  function cardCreator(){

    const divCard = document.createElement('div');

    divCard.classList.add('card');

    const divHeadline = document.createElement('div');

    divHeadline.classList.add('headline');

    const divAuthor = document.createElement('div');

    divAuthor.classList.add('author');

    const divImage = document.createElement('div');

    divImage.classList.add('img-container');

    const authorImg = document.createElement('img');

    authorImg.setAttribute('src')
    
    const spanAuthorsName = document.createElement('span');

    divImage.appendChild(authorImg);

    divAuthor.appendChild(divImage);

    divAuthor.appendChild(spanAuthorsName);

    divHeadline.appendChild(divAuthor);

    divCard.appendChild(divHeadline);

    return divCard

  }