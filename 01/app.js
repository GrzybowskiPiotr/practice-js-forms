const form = document.querySelector("form");

function createLiElement(textContent) {
  const li = document.createElement("li");
  li.classList.add("user-list__person");
  li.innerText = textContent;
  return li;
}

function handleSubmit(form) {
  let formData = new FormData(form);
  const ul = document.querySelector("ul");
  ul.appendChild(
    createLiElement(`${formData.get("firstName")} ${formData.get("lastName")}`)
  );
  form.reset();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit(form);
});
