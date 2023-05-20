import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`)

const STORAGE_KEY = `feedback-form-state`;

const formData = {};

lastInput();

form.addEventListener(`input`, throttle((e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500));

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
});

function lastInput() {
    const savedInput = localStorage.getItem(STORAGE_KEY);

    if (savedInput) {
        form.value = savedInput;
    }
};