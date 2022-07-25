import Card from './card.js';
import initialCards from './cards.js';
import FormValidator from './FormValidator.js';

const popups = document.querySelectorAll('.popup');
const popupsCloseButtons = document.querySelectorAll('.popup__close-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const openEditButton = document.querySelector('.profile__edit-button');
const openAddButton = document.querySelector('.profile__add-button');
const name = document.querySelector('.profile__text');
const status = document.querySelector('.profile__subtext');
const formElementAdd = document.querySelector('.popup__form-add');
const formElementEdit = document.querySelector('.popup__form-edit');
const bio = document.querySelector('.popup__input_place_username');
const statusInfo = document.querySelector('.popup__input_place_status');
const popLand = document.querySelector('.popup__input_place_land');
const popLink = document.querySelector('.popup__input_place_link');
const picPopup = document.querySelector('.popup_type_opened-picture');
const cardsContainer = document.querySelector('.cards');
const popImage = picPopup.querySelector('.popup__image');
const popFigcaption = picPopup.querySelector('.popup__figcaption');

const validationConfig = {
  formSelector: '.popup__form',
  fieldsSelector: '.popup__fieldset',
  inputList: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_invalid',
  inputErrorClass: 'popup__input_type_invalid',
  errorClass: 'popup__input-error_type_active',
};


function closePopupEsc(evt){
  if (evt.key === "Escape"){
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened)
  }
}

function openPopup (popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc)
}

function picPopupOpened (link, name) {
  popImage.src = link;
  popImage.alt = name;
  popFigcaption.textContent = name;
  openPopup(picPopup);
}

function handlerEditSubmit (evt) {
    evt.preventDefault();
    name.textContent = bio.value;
    status.textContent = statusInfo.value;
    closePopup(popupEdit);
}


function handleAddSubmit (evt) {
  evt.preventDefault();
  const cardElement = {name, link,}
  cardElement.name = popLand.value;
  cardElement.link = popLink.value;
  const card = new Card ('.elements__template', cardElement, picPopupOpened);
  const cardItem = card.generateCard()
  renderCard(cardItem);
  formElementAdd.reset();
  closePopup(popupAdd);
}

initialCards.forEach((item) => {
  const card = new Card ('.elements__template', item, picPopupOpened);
  const cardItem = card.generateCard()

  renderCard(cardItem);
});

function renderCard(cardItem) {
  cardsContainer.prepend(cardItem);
}

openEditButton.addEventListener('click', () =>{
  bio.value = name.textContent;
  statusInfo.value = status.textContent;
  openPopup(popupEdit);
});

openAddButton.addEventListener('click', () => {
  addValidation.toggleButtonState();
  openPopup(popupAdd)
});

popupsCloseButtons.forEach(function(el) {
  el.addEventListener('click', function(close) {
      const actualPopup = close.target.closest('.popup');
      closePopup(actualPopup);
  });
});

popups.forEach(function(popup){
  popup.addEventListener('mousedown', function(evt){
    if (evt.target === evt.currentTarget){
      closePopup(popup);
    }
  });
});

formElementEdit.addEventListener('submit', handlerEditSubmit);

formElementAdd.addEventListener('submit', handleAddSubmit);

const editValidation = new FormValidator(validationConfig, formElementEdit);
editValidation.enableValidation();

const addValidation = new FormValidator(validationConfig, formElementAdd);
addValidation.enableValidation();