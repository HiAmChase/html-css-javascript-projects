const animatedBg = document.querySelectorAll(".animated-bg");
const animatedBgText = document.querySelectorAll(".animated-bg-text");
const cardHeader = document.querySelector(".card-header");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const cardAuthor = document.querySelector(".card-author");

setTimeout(loadData, 2000);

function loadData() {
    cardHeader.innerHTML = `<img src="https://motionarray.imgix.net/preview-548818-xuk8YUpNHtXPu9CW-large.jpg?w=1400&q=60&fit=max&auto=format" alt="Image Header">`;

    titleEl.innerHTML = `Lorem ipsum dolor sit amet`;

    contentEl.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`;

    cardAuthor.innerHTML = `<img src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/186558318_3000200956887921_9085841357317011880_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=D-jOKMYkKl8AX8lcTMv&tn=XwHK4M40mxbQH7G5&_nc_ht=scontent-hkt1-2.xx&oh=a3f182b397f7beb8d6c7b3a97b12cce3&oe=60E1177C" alt="Avatar">
    <div class="author-info">
        <h3 id="name">Chase</h3>
        <small>Oct 08, 2020</small>
    </div>`;

    animatedBg.forEach(bg => bg.classList.remove("animated-bg"));
    animatedBgText.forEach(bg => bg.classList.remove("animated-bg-text"));
}