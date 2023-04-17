document.getElementById("info-button"). onclick = function () {
  document.getElementById("contacts").scrollIntoView({behavior: "smooth"});
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
})