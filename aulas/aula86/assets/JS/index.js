// class Formulario {

//     constructor(formulario) {
//         this.formulario = formulario;
//     }


//     validarForm() {

//         this.formulario.addEventListener("submit", function (event) {

//             event.preventDefault()

//             this.inputs = document.querySelectorAll('input')

//             for (let input of this.inputs) {
//                 if (input.value.length === 0) {
//                     document.getElementById(`warning-${input.id}`).innerHTML = `<p>O campo ${input.name} deve ser preenchido.</p>`
//                 } else {
//                     document.getElementById(`warning-${input.id}`).innerHTML = ""
//                 }
//             }
//         })

//     }



// }

// const enviarForm = new Formulario(document.querySelector('form'))

// enviarForm.validarForm()

class ValidaFormulario {

    constructor() {
        this.formulario = document.querySelector("form");

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener("submit", (e) => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.isValid()
        const senhasValidas = this.passwordIsValid()
    }

    passwordIsValid() {
        let valid = true;

        const password = this.formulario.querySelector('.password')
        const repeatPassword = this.formulario.querySelector('.repeat-password')

        if (password.value !== repeatPassword.value) {
            valid = false;
            this.createError(password, `Campo senha e repetir senha precisam ser iguais.`)
            this.createError(repeatPassword, `Campo senha e repetir senha precisam ser iguais.`)
        }

        return valid
    }

    isValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText.replace(":", "");
            if (!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar em branco.`)
                valid = false
            }

            if (campo.classList.contains("cpf")) {
                if (!this.validaCpf(campo)) valid = false;
            }

            if (campo.classList.contains("user")) {
                if (!this.validaUser(campo)) valid = false;
            }

            if (campo.classList.contains("password") || campo.classList.contains("repeat-password")) {
                if (!this.validPassword(campo)) valid = false;
            }
        }

        return valid
    }

    validPassword(campo) {
        const password = campo.value;
        let valid = true

        if (password.length < 6 || password.length > 12) {
            this.createError(campo, "Senha precisa ter entre 6 e 12 caracteres.")
            valid = false;
        }

        return valid
    }

    validaUser(campo) {
        const usuario = campo.value;
        let valid = true;

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(campo, "Nome de usuário só permite numeros e letras.")
            valid = false;
        }

        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, "Usuário precisa ter entre 3 e 12 caracteres.")
            valid = false;
        }

        return valid
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value)

        if (!cpf.valida()) {
            this.createError(campo, 'CPF inválido!')
            return false
        }
        return true
    }

    createError(campo, msg) {
        const div = document.createElement("div")
        div.innerHTML = msg
        div.classList.add("error-text")
        campo.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaFormulario()