document.addEventListener("DOMContentLoaded", init);
const color = document.querySelector("input[name=color]");
const range = document.querySelector("input[name=opacity]");

let colorHex = "#000000";

const box = document.querySelector(".box");

color.addEventListener("input", () => {
  colorHex = color.value;
  setBoxShadow(box, color.value);
});
range.addEventListener("input", () => {
  setBoxShadow(box, colorHex, range.value / 100);
});

function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, colorHex);
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")}, 
        ${getChannelColor(colorInHex, "green")}, 
        ${getChannelColor(colorInHex, "blue")}, 
        ${opacity}
    )`;

  element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}

function getChannelColor(colorInHex, channelName) {
  let start;
  switch (channelName) {
    case "red":
      start = 1;
      break;
    case "green":
      start = 3;
      break;
    case "blue":
      start = 5;
      break;
  }

  const channelColorHex = colorInHex.substr(start, 2);
  const channelColorDec = parseInt(channelColorHex, 16);

  return channelColorDec;
}
