import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.querySelector(`input`),
  message: document.querySelector(`textarea`)
}

const STORAGE_KEY = `feedback-form-state`;

const formData = {};

lastInput();

refs.form.addEventListener(`input`, throttle(onFormInput, 500));

refs.form.addEventListener(`submit`, onFormSubmit);

function onFormInput(e){
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e){
  e.preventDefault();

    e.currentTarget.reset();
  const savedInput = localStorage.getItem(STORAGE_KEY);

   console.log(savedInput);
  localStorage.removeItem(STORAGE_KEY);
}



function lastInput() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(savedForm);

    if (data) {
      refs.email.value = data.email;
      refs.message.value = data.message;
    }
};
