function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const clickBtb = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");
clickBtb.addEventListener("click", click)

function click(){
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = spanColor.textContent;
}