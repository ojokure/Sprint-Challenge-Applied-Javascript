// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


    axios.get('https://lambda-times-backend.herokuapp.com/topics')
      .then(res => {
         res.forEach((el) => {
            const data = res.data.topics
            const topic = tabCreator(data);
            const topics = document.querySelector('.topics');
            topics.appendChild(topic);

        });

    })
    .catch(err => { 
    //   document.body.innerText = error.message;
    });
  


function tabCreator(data){

     const divTab = createElement('div');

     divTab.classList.add('tab');

     divTab.innerText = 'topic here'

     return divTab
   
}