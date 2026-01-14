document.addEventListener("DOMContentLoaded", () => {

    const inputEmail = document.querySelector("#email");
    const inputCc = document.querySelector("#cc");
    const inputAsunto = document.querySelector("#asunto");
    const mensaje = document.querySelector("#mensaje");
    const btnSubtmit = document.querySelector("#botones button[type='submit']");

    const validar = (e) => {
        if (e.target.value.trim() === "") {
            console.log("está vacio");
            return;
        }

        console.log("si hay algo....");
    }

    //EVENTOS
    inputEmail.addEventListener("blur", validar)
    inputCc.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
})