const form = document.querySelector('#form')
const formInputs = document.querySelectorAll('#form input')
const formButton = document.querySelector('#form button')
const alertDanger = document.querySelector('#alert-danger')
const alertSuccess = document.querySelector('#alert-success')

function validateForm() {
    let isValid = true
    formInputs.forEach(input => {
        if (input.value == '') {
            isValid = false
        }
    })
    return isValid
}


formButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alertSuccess.style.display = 'block';
        alertDanger.style.display = 'none';

    } else {
        alertSuccess.style.display = 'none';
        alertDanger.style.display = 'block';

    }
}
)
