import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');

feedbackFormRef.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackFormRef.addEventListener('submit', onFeedbackFormSubmit);

const {
  elements: { email, message },
} = feedbackFormRef;

checkStorage();

function onFeedbackFormInput() {
  const elementsValue = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(elementsValue));
}

function checkStorage() {
  const obj = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (obj) {
    email.value = obj.email;
    message.value = obj.message;
  }
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');

  console.log({
    email: email.value,
    message: message.value,
  });
  event.currentTarget.reset();
}
