// scroll
const links = document.querySelectorAll(".banner-link");

for (const link of links) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
});
}
window.onscroll = function(){scrollFunction()};
//buttonup
const upbuttons = document.querySelectorAll(".button-up");

for (const upbutton of upbuttons) {
        upbutton.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
});
}

function scrollFunction(){
    if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById('btnUp').className = 'button-up visible';
    } else {
        document.getElementById('btnUp').className = 'button-up hidden';
    }
}

function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}
/*dasasdd*/
