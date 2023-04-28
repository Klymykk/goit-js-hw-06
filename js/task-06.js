const input = document.querySelector("#validation-input");
input.addEventListener("blur", (event) => {
    if(Number(event.currentTarget.value.length) === Number(input.dataset.length)){
        input.classList.add("valid");
    } else{
        input.classList.add("invalid");
        }
})