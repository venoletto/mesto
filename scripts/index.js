let closeButton = document.querySelector('.popup__close-button');
let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let name = document.querySelector('.profile__text');
let bio = document.querySelector('.popup__input_username');
let status = document.querySelector('.profile__subtext');
let statusInfo = document.querySelector('.popup__input_status');
let formElement = document.querySelector('.popup__form')

function openPopup () {
  popup.classList.add('popup_opened');
  bio.value = name.textContent;
  statusInfo.value = status.textContent;

}

function closePopup() {
    popup.classList.remove('popup_opened');
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

