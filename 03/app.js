const inputFiles = document.querySelector("input");
const ul = document.querySelector("ul");
// inputFiles.setAttribute("accept", "image/*");

function newImageItem(file, liElement) {
  const newLiElement = liElement.cloneNode(true);
  newLiElement.classList.remove("images-list__item--prototype");
  newLiElement.querySelector(".images-list__item-name").innerText = file.name;
  newLiElement
    .querySelector(".images-list__item-img")
    .setAttribute("src", URL.createObjectURL(file));
  newLiElement.querySelector(
    ".images-list__item-size"
  ).innerText = `Rozmiar pliku: ${(Number(file.size) / (1024 * 1024)).toFixed(
    2
  )} MB`;
  return newLiElement;
}

function inputImageDisplay() {
  const liElement = document.querySelector(".images-list__item");
  let Files = inputFiles.files;
  if (Files.length > 0) {
    for (let file of Files) {
      if (file.type.includes("image")) {
        ul.appendChild(newImageItem(file, liElement));
      }
    }
  }
}

inputFiles.addEventListener("change", inputImageDisplay);
