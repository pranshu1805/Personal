const button = document.querySelector(".btn");

button.addEventListener("click", () => {

  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });

});