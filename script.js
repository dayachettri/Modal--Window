'use strict';

// Storing needed classes in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Fn to remove the classes which hide the modal window
const openModal = function () {
  // Dont need (.) befores class name
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Fn to add back the classes which hide the modal window
const closeModal = function () {
  // Dont need (.) befores class name
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Step:1 Looping over the nodelist which contains all of the 3 buttons and adding eventlisterner function to all of them
// Step:2 Open the modal window on a click event on btnsOpenModal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//Close the modal window on a click event on btnsCloseModal
btnsCloseModal.addEventListener('click', closeModal);

//Close the modal window on a click event on overlay: basically outside the modal window
overlay.addEventListener('click', closeModal);
