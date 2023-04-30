const form = document.querySelector(".login-form");
form.addEventListener("submit", inSubmit);
function inSubmit (evt) {
    evt.preventDefault();
    const { elements: { email, password }} = evt.currentTarget;
    if(!email.value.length || !password.value.length){
      return alert("Заповніть всі поля")
    } else{
        const data = {
            email: email.value,
            password : password.value
        }
        console.log(data);
        form.reset();
    }
};
