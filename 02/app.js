const form = document.querySelector("form");

const errors = [];
const fields = [];

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const pass1 = formData.get("pass1");
  const pass2 = formData.get("pass2");

  for ([key] of formData.entries()) {
    const selector = "form" + key.charAt(0).toUpperCase() + key.slice(1);
    const field = document.querySelector(`#${selector}`);
    fields.push(field);
  }

  const checkbox = document.querySelector("#formAccept");
  fields.push(checkbox);

  function handleFieldVal(condition, field) {
    if (condition) {
      if (!errors.includes(fields[field])) {
        errors.push(fields[field]);
      }
      fields[field].previousElementSibling.setAttribute("style", "color: red");
    } else {
      errors.splice(errors.indexOf(fields[field]), 1);
      fields[field].previousElementSibling.setAttribute("style", "");
    }
  }

  handleFieldVal(!regex.test(formData.get("login")), 0);
  handleFieldVal(pass1.trim().length < 6, 1);
  handleFieldVal(pass1 !== pass2 || pass2 === "", 2);
  handleFieldVal(!checkbox.checked, 3);

  if (errors.length === 0) {
    console.log("Done");
  }
}
//   if (passLength >= 6 && pass1 === pass2) {
//     // console.log("Pass test OK");
//     console.log(checkbox.checked);
//   } else {
//     // console.table(`P1 : ${pass1}. P2 : ${pass2}. PL: ${passLength}`);
//   }

form.addEventListener("submit", (e) => handleFormSubmit(e));
