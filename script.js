'use strict';

// Storing needed classes in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

/* Looping over the nodelist which contains all of the 3 buttons and adding eventlisterner function to all of them  */
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    /* Removing the classes on a click event on btnsOpenModal which are hiding the modal window, we dont need (.) before the class name in this case */
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//Close the modal window on a click event on btnsCloseModal
btnsCloseModal.addEventListener('click', function () {
  /* Adding back the classes on a click event on btnsCloseModal which are hiding the modal window  */
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
