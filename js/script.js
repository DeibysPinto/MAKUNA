//swich white mode

const whitem = document.querySelector("#whitem");
const body = document.querySelector("body");
const header = document.querySelector("header")
const footer = document.querySelector("footer")
whitem.addEventListener("click", a => {
    body.classList.toggle("whitemode");
    header.classList.toggle("whitemode");
    footer.classList.toggle("whitemode")
});