const control = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = control.valueAsNumber + "px";
control.addEventListener("input", (event) => {
text.style.fontSize = event.currentTarget.valueAsNumber + "px";
})