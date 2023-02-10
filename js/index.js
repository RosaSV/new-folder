const loginButton = document.querySelector('.login-button');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.popup__close');

function openPopup() {
    overlay.classList.add('show-popup');
}

function closePopup() {
    overlay.classList.remove('show-popup');
}

loginButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
overlay.addEventListener('click', (e) => {
    console.log(e);
})
