const menu = document.querySelector('.menu')
const btnOpenMenu = document.querySelector('.menu-btn-open')
const btnCloseMenu = document.querySelector('.menu-btn-close')
const modal = document.querySelector('.modal-overlay')
const btnOpenModal = document.querySelector('.hero-btn')
const btnCloseModal = document.querySelector('.contact-form-btn-close')

btnOpenMenu.addEventListener('click', () => {
  menu.classList.add('is-open')
})

btnCloseMenu.addEventListener('click', () => {
  menu.classList.remove('is-open')
})

btnOpenModal.addEventListener('click', () => {
  modal.classList.add('is-open')
})

btnCloseModal.addEventListener('click', () => {
  modal.classList.remove('is-open')
})