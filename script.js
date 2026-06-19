/* ==========================
JAYVARDHAN PORTFOLIO JS
========================== */

/* LOADER */

window.addEventListener("load", () => {

```
const loader = document.getElementById("loader");

setTimeout(() => {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

}, 1200);
```

});

/* HEADER EFFECT */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

```
if(window.scrollY > 50){

    header.style.background =
    "rgba(6,7,13,.95)";

    header.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.3)";

}

else{

    header.style.background =
    "rgba(6,7,13,.75)";

    header.style.boxShadow = "none";

}
```

});

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

```
link.addEventListener("click", e => {

    e.preventDefault();

    const target =
    document.querySelector(
    link.getAttribute("href")
    );

    if(target){

        target.scrollIntoView({
            behavior:"smooth"
        });

    }

});
```

});

/* SCROLL REVEAL */

const revealElements =
document.querySelectorAll(
".timeline, .skill-card, .project, #about p, #contact p"
);

function revealOnScroll(){

```
revealElements.forEach(item => {

    const itemTop =
    item.getBoundingClientRect().top;

    const screenHeight =
    window.innerHeight;

    if(itemTop < screenHeight - 100){

        item.classList.add("show");

    }

});
```

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ACTIVE NAV LINK */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 200;

    const sectionHeight =
    section.clientHeight;

    if(
    window.scrollY >= sectionTop &&
    window.scrollY <
    sectionTop + sectionHeight
    ){

        current =
        section.getAttribute("id");

    }

});

navLinks.forEach(link => {

    link.classList.remove("active");

    if(
    link.getAttribute("href")
    === "#" + current
    ){

        link.classList.add("active");

    }

});
```

});

/* TYPING EFFECT */

const title =
document.querySelector(".small-title");

if(title){

```
const text =
"Developer • Entrepreneur • Creator";

title.innerHTML = "";

let index = 0;

function typeText(){

    if(index < text.length){

        title.innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(
        typeText,
        70
        );

    }

}

setTimeout(typeText, 800);
```

}

/* PARALLAX PROFILE */

const profile = document.querySelector(".profile-circle");

document.addEventListener("mousemove", (e) => {

    if (!profile) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    profile.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* COUNTER (OPTIONAL) */

function animateValue(
element,
start,
end,
duration
){

```
let startTime = null;

function animation(currentTime){

    if(!startTime)
    startTime = currentTime;

    const progress =
    Math.min(
    (currentTime - startTime)
    / duration,
    1
    );

    element.textContent =
    Math.floor(
    progress * (end - start)
    + start
    );

    if(progress < 1){

        requestAnimationFrame(
        animation
        );

    }

}

requestAnimationFrame(
animation
);
```

}

/* CONSOLE SIGNATURE */

console.log(`

━━━━━━━━━━━━━━━━━━━━━━

Jayvardhan Singh
Developer • Entrepreneur

Founder of WebJay

Portfolio Loaded Successfully

━━━━━━━━━━━━━━━━━━━━━━

`);
