let closeButton = document.querySelector('.popup__close-button');
let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let name = document.querySelector('.profile__text');
let bio = document.querySelector('.popup__username-input');
let status = document.querySelector('.profile__subtext');
let statusInfo = document.querySelector('.popup__status-input');
let formElement = document.querySelector('.popup__form')

function openPopup () {
  popup.classList.remove('popup_remove');
  bio.value = name.textContent;
  statusInfo.value = status.textContent;

}

function closePopup() {
    popup.classList.add('popup_remove');
}

openButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = bio.value;
    status.textContent = statusInfo.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

