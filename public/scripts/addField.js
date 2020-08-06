
/* Ao clicar em "+ Novo Horário" (add-time), ir duplicando 
 os horarios disponiveis (schedule-item) abaixo, 
 porem limpando os dados dentro deles! */


document.querySelector('#add-time').addEventListener('click', cloneField);

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach(function (field) {
        console.log(field);
        field.value = "";
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}