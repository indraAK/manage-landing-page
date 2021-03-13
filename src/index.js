import './js/swiper';
import './scss/main.scss';
import './js/showBgHeader';
import './js/mobileNav';

const form = document.getElementById('form');

function handleForm(event) {
   event.preventDefault();

   const emailValue = this.email.value.trim();

   if (emailValue === '') {
      showError({
         element: this.email,
         type: 'required',
         message: 'Email is required'
      });
   } else if (!isValidEmail(emailValue)) {
      showError({
         element: this.email,
         type: 'invalid',
         message: 'Please insert a valid email'
      })
   } else {
      const formControl = this.email;
      const feedbackEl = formControl.nextElementSibling;
      formControl.classList.remove('invalid', 'invalid-input');
      feedbackEl.textContent = '';
      window.location.reload();
   }
}

function showError({ element: formControl, type, message }) {
   formControl.classList.add('invalid');
   (type === 'invalid') ? formControl.classList.add('invalid-input') : formControl.classList.remove('invalid-input');
   const feedbackEl = formControl.nextElementSibling;
   feedbackEl.textContent = message;
}

function isValidEmail(email) {
   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   return regex.test(email.toLowerCase());
}

form.addEventListener('submit', handleForm);