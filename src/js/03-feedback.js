import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

populateFormValues();

const formData = {};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput, 500));



function onFormSubmit(e) {
    e.preventDefault();
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}



function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    const messageValue = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, messageValue);
}


function populateFormValues() {
    const valueSaved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (valueSaved) {
         console.log(valueSaved);
        refs.input.value = valueSaved.email;
        refs.textarea.value = valueSaved.message;
    }
}