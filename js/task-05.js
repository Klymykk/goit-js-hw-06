const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");
input.addEventListener("input",(event) => {
    text.textContent = event.currentTarget.value;
    if(!text.textContent.length){
        text.textContent = "Anonymous";
    }
})