const btn = document.querySelector(".btn");
const share = document.querySelector(".share-list");

btn.addEventListener("click", function () {
  share.classList.toggle("hidden");
});
