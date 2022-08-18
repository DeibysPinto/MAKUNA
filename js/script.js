//swich white mode

const whitem = document.querySelector("#whitem");
whitem.addEventListener("click", () => {
  document.body.classList.toggle("whitemode");
  whitem.classList.toggle("active");

  //storage

  if (document.body.classList.contains("whitemode")) {
    localStorage.setItem("white", "true");
  } else {
    localStorage.setItem("white", "false");
  }
});

if (localStorage.getItem("white") === "true") {
  document.body.classList.add("whitemode");
  whitem.classList.add("active");
} else {
  document.body.classList.remove("whitemode");
  whitem.classList.remove("active");
}

