import axios from "axios";

const followersArray = [
  "CameronBloom",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const getData = () => {

// }



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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



/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



function makeCard(gitProfile) {

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = gitProfile.avatar_url;
  cardImage.alt = "GitHub Profile Picture"
  cardContainer.appendChild(cardImage);

  const cardInfo = document.createElement("div");
  cardContainer.classList.add("card-info");
  cardContainer.appendChild(cardInfo);


  const infoHeading = document.createElement("h3");
  infoHeading.classList.add("name");
  infoHeading.textContent = gitProfile.name;
  const infoUsername = document.createElement("p");
  infoUsername.classList.add("username");
  infoUsername.textContent = gitProfile.login;
  const infoLocation = document.createElement("p");
  infoLocation.textContent = `Location: ${gitProfile.location}`;
  const infoProfile = document.createElement("p");
  infoProfile.textContent = "Profile: ";
  const infoProfileLink = document.createElement("a");
  infoProfileLink.href = gitProfile.html_url;
  infoProfileLink.textContent = gitProfile.html_url;
  const infoFollowers = document.createElement("p");
  infoFollowers.textContent =`Followers: ${gitProfile.followers}`;
  const infoFollowing = document.createElement("p");
  infoFollowing.textContent =`Following: ${gitProfile.following}`;
  const infoBio = document.createElement("p");
  infoFollowing.textContent =`Bio: ${gitProfile.bio}`;

  cardInfo.appendChild(infoHeading)
  cardInfo.appendChild(infoUsername)
  cardInfo.appendChild(infoLocation)
  cardInfo.appendChild(infoProfile)
  infoProfile.appendChild(infoProfileLink)
  cardInfo.appendChild(infoFollowers)
  cardInfo.appendChild(infoFollowing)
  cardInfo.appendChild(infoBio)

  return cardContainer;

}



function buildGitProfile(profile) {
  console.log(`=> grabbing user data...`);
  axios.get(`https://api.github.com/users/${profile}`)
    .then(response => {
      document.querySelector(".cards").appendChild(makeCard(response.data));
    })
    .catch(err => {
      console.error(err);
    })
  console.log(`=> get user data complete...`);
}



for (let index = 0; index < followersArray.length; index++) {
  const currProfile = followersArray[index];
  buildGitProfile(currProfile);
}