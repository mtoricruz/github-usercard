import axios from 'axios'

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const enter = document.querySelector('.cards')

axios.get('https://api.github.com/users/mtoricruz')
  .then(response => {
    enter.appendChild(gitCard(response.data));
  })
  .catch(error => {
    console.log(error)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = ['Owlspec3086', 'JackBlumenthal', 'bobbygondola', 'e94canales', 'nicholas-myers'];

followersArray.forEach(follower => {
  // const followerCard = gitCard(follower)
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      console.log(response)
      const user = response.data
      enter.appendChild(gitCard(user))
    })
    .catch(error => {
      console.log(error)
    })
 
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
 <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:  
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div> 
*/

function gitCard(object) {
  // instantiate elements
  const cardDiv = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfoDiv = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUserName = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardProfileLink = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  // nest correctly
  cardDiv.appendChild(cardImg)
  cardDiv.appendChild(cardInfoDiv)
  cardInfoDiv.appendChild(cardName)
  cardInfoDiv.appendChild(cardUserName)
  cardInfoDiv.appendChild(cardLocation)
  cardInfoDiv.appendChild(cardProfile)
  cardProfile.appendChild(cardProfileLink)
  cardInfoDiv.appendChild(cardFollowers)
  cardInfoDiv.appendChild(cardFollowing)
  cardInfoDiv.appendChild(cardBio)

  // add class names
  cardDiv.classList.add('card')
  cardInfoDiv.classList.add('card-info')
  cardName.classList.add('name')
  cardUserName.classList.add('username')

  // set text content for our card
  cardName.textContent = `${object.name}`
  cardUserName.textContent = `${object.login}`
  cardLocation.textContent = `Location: ${object.location}`
  cardProfile.textContent = `Profile: ${object.url}`
  cardFollowers.textContent = `Followers: ${object.followers}`
  cardFollowing.textContent = `Following: ${object.following}`
  cardBio.textContent = `${object.bio}`

  // set image url for user
  cardImg.src = `${object.avatar_url}`

  // set profile link for user
  cardProfileLink.href = `${object.url}`

  return cardDiv
}
gitCard(axios)
gitCard(followersArray)



/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
