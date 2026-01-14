document.addEventListener("DOMContentLoaded", () => {

    const inputEmail = document.querySelector("#email");
    const inputCc = document.querySelector("#cc");
    const inputAsunto = document.querySelector("#asunto");
    const btnSubtmit = document.querySelector("#botones button[type='submit']");



    const validarEmail = (email) => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado
    }

    const limpiarAlerta = (referencia) => {
        const alerta = referencia.querySelector(".bg-red-600");

        if (alerta) {
            alerta.remove()
        }
    }

    const mostrarAlerta = (mensaje, referencia) => {
        limpiarAlerta(referencia)

        const error = document.createElement("P");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-white", "p-2");

        referencia.appendChild(error);
    }


    const validar = (e) => {
        //PARA TODOS LOS INPUTS
        if (e.target.value.trim() === "") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            return;
        }

        //SOLO PARA EL INPUT DE EMAIL
        if (e.target.id === "email" && !validarEmail(e.target.value)) {
            mostrarAlerta("El email no es válido", e.target.parentElement)
            return;
        }

        limpiarAlerta(e.target.parentElement);
    }

    //EVENTOS
    inputEmail.addEventListener("blur", validar)
    inputCc.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
})