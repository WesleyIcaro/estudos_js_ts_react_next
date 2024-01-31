class Formulario {

    constructor(formulario) {
        this.formulario = formulario;
    }


    validarForm() {

        this.formulario.addEventListener("submit", function (event) {

            event.preventDefault()

            this.input = document.querySelectorAll('input')

            console.log(this.input.length)

        })

    }



}

const enviarForm = new Formulario(document.querySelector('form'))

enviarForm.validarForm()
