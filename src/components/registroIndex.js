
export const registro = async (form) =>{

    form.addEventListener('submit', (e) => {
            
            e.preventDefault();
            //obtención de datos del ingresados
            const email = document.getElementById('inputEmail').value;
            const user = document.getElementById('inputUser').value;
            const password = document.getElementById('inputPassword').value;
            const confirmPassword = document.getElementById('inputConfirmPassword').value;
            const telephoneNumber = document.getElementById('inputNumber').value;
            const checkTerms = document.getElementById('checkTerms').checked;

            console.log(email, user, password, confirmPassword, telephoneNumber, checkTerms);

            let validations = [];
            //corrobora si los datos son correctos
            if (password !== confirmPassword ){
                validations.push('Las contraseñas no coinciden.')
            }

            if (email.length === 0 || user.length === 0 || password.length === 0 || confirmPassword.length === 0 || telephoneNumber.length === 0 ){
                validations.push('Falta completar algún campo.')
            }

            if (checkTerms === false ){
                validations.push('No aceptó los términos y condiciones.')
            }

            console.log(validations);

            const formValidation = document.getElementById('formValidation');

            formValidation.innerHTML = '';

            validations.forEach(validation => {
                let validationError = document.createElement('li');
                validationError.className = "alert alert-danger";

                validationError.innerText = validation;
                formValidation.append(validationError);
            });

            if(validations.length === 0){
                //alerta al usuario
                Swal.fire({
                    title: 'Genial',
                    text: `Has sido registrado con éxito`,
                    icon: 'success',
                    timer: 4000 
                });
            }
        });
}