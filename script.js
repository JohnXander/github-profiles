//Store the API link in a variable

const APIURL = "https://api.github.com/users/";

//Store the elements from the HTML file

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//Initially call the function to display my profile as default

getUser("JohnXander")

//Connect to API and pass parameter into main function

async function getUser(user) {
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();

    createUserCard(respData)
}

//Main function (create HTML div using API data):

function createUserCard(user) {

    const cardHTML = `

        <div class="card">
            <div class="img-container">
                <img
                    class="avatar"
                    src="${user.avatar_url}"
                    alt="${user.name}"
                />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
            </div>
        </div>

    `;

    main.innerHTML = cardHTML;
}

//Search for user with whichever username is typed into the input

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value; 
    
    if (user) {
        getUser(user);

        search.value = "";
    }
    
})