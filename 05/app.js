const form = document.querySelector("form");
form.setAttribute("novalidate", true);

function handleSubmit(e) {
  e.preventDefault();
  const messages = document.querySelector(".messages");
  messages.innerHTML = "";
  let hasErrors = false;

  const vivoship = form.querySelector(`select[name="voivodeship"]`);

  const fields = form.querySelectorAll("input[required]");

  for (let input of fields) {
    if (input.value === "") {
      const li = document.createElement("li");
      li.innerText = `Wypełnij pole ${input.parentNode.innerText}. Jest wymagane.`;
      messages.appendChild(li);
      hasErrors = true;
    }
  }
  if (vivoship.value === "") {
    if (vivoship.value === "") {
      const li = document.createElement("li");
      li.innerText = "Wypełnij pole Województwo. Jest Wymagane";
      messages.appendChild(li);
      hasErrors = true;
    }
  }
  if (!hasErrors) {
    messages.innerHTML = "<p>Dane zostały wysłane prawidłowo.</p>";
    form.reset();
  }
}

form.addEventListener("submit", (e) => handleSubmit(e));
