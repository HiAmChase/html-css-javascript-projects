const APIURL = "https://api.github.com/users/";

const form = document.querySelector("form");
const search = document.getElementById("search");
const container = document.querySelector(".container");

async function getProfile(username) {
    const resp = await fetch(APIURL + username);

    const respData = await resp.json();

    const repos = await getRepos(respData.repos_url);

    addProfileToCard(respData, repos);
}

async function getRepos(url) {
    const resp = await fetch(url);

    const respData = await resp.json();
    
    return respData;
}

function addProfileToCard(user, repos) {
    container.innerHTML = '';
    const {avatar_url, name, bio, followers, following, public_repos} = user;
    const profileEl = document.createElement("div");
    profileEl.classList.add("profile");

    profileEl.innerHTML = `
        <img src="${avatar_url}">
        <div class="info">
            <div class="desc">
                <h3>${name}</h3>
                <p>
                    ${bio}
                </p>
            </div>
            <div class="archive">
                <p>
                    ${followers} <span>Followers</span>
                </p>
                <p>
                    ${following} <span>Following</span>
                </p>
                <p>
                    ${public_repos} <span>Repos</span>
                </p>
            </div>
        </div>
    `;

    const infoEl = profileEl.querySelector(".info");
    let listRepo = document.createElement("ul");
    listRepo.classList.add("repos");

    repos.slice(0, 15).forEach((repo) => {
        const liEl = document.createElement("li");
        const repoEl = document.createElement("a");

        repoEl.target = "_blank";
        repoEl.href = user.html_url;
        repoEl.innerHTML = repo.name;
        liEl.appendChild(repoEl)
        listRepo.appendChild(liEl);
    })

    infoEl.appendChild(listRepo);

    container.appendChild(profileEl);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm) {
        getProfile(searchTerm);

        search.value = '';
    }
})