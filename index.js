const buttons = document.querySelectorAll('[data-modal-toggle]');
// const modals = document.querySelectorAll('[data-modal]');

console.log('buttons', buttons);
// console.log('modals', modals);

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const modalId = button.getAttribute('data-modal-toggle');
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    toggleModal(modal);
  });
})

function toggleModal(modal) {
  const isOpen = modal.getAttribute('data-open') === 'true' ? true : false;

  if (isOpen) {
    modal.style.display = 'none';
    modal.setAttribute('data-open', false);
    document.body.style.overflow = '';
  }
  else {
    modal.style.display = 'flex';
    modal.setAttribute('data-open', true);
    document.body.style.overflow = 'hidden';
  }
}


// document.addEventListener('readystatechange', () => {
//   alert('hello')
// });