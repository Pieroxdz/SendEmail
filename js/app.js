document.addEventListener("DOMContentLoaded", () => {

    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const btnSubmit = document.querySelector("#botones button[type='submit']");
    const btnReset = document.querySelector("#botones button[type='reset']");
    const formulario = document.querySelector("#formulario");
    const spinner = document.querySelector("#spinner");

    const email = {
        email: "",
        asunto: "",
        mensaje: ""
    }

    const enviarEmail = (e) => {
        e.preventDefault();

        spinner.classList.add("flex")
        spinner.classList.remove("hidden")

        setTimeout(() => {
            spinner.classList.remove("flex")
            spinner.classList.add("hidden")
            resetFormulario();

            const alertaExito = document.createElement("P");
            alertaExito.classList.add("bg-green-500", "text-white", "p-2", "text-center", "rounded-lg", "mt-10", "font-bold", "text-sm", "uppercase")
            alertaExito.textContent = "Mensaje envíado correctamente"
            formulario.appendChild(alertaExito)
        }, 3000)

    }

    const resetFormulario = () => {
        email.email = ""
        email.asunto = ""
        email.mensaje = ""
        formulario.reset();
        comprobarEmail();
    }

    const comprobarEmail = () => {
        const isFull = Object.values(email).includes("");
        if (isFull) {
            btnSubmit.classList.add("opacity-50")
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
    }

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
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = "";
            return;
        }

        //SOLO PARA EL INPUT DE EMAIL
        if (e.target.id === "email" && !validarEmail(e.target.value)) {
            mostrarAlerta("El email no es válido", e.target.parentElement)
            email[e.target.name] = "";
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //Asignamos los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();
    }

    //EVENTOS
    inputEmail.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
    inputMensaje.addEventListener("blur", validar)
    formulario.addEventListener("submit", enviarEmail)

    btnReset.addEventListener("click", (e) => {
        e.preventDefault();

        resetFormulario();
    })
})