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
const elements = document.querySelector('.elements');
const popImage = picPopup.querySelector('.popup__image');
const popFigcaption = picPopup.querySelector('.popup__figcaption');
const config = {
  formSelector: '.popup__form',
  fieldsSelector: '.popup__fieldset',
  inputList: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_invalid',
  inputErrorClass: 'popup__input_type_invalid',
  errorClass: 'popup__input-error_type_active',
};
import Card from './card.js';
import initialCards from './cards.js';
import FormValidator from './validate.js';


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

function popupEditOpen(){
  openPopup(popupEdit)
  bio.value = name.textContent;
  statusInfo.value = status.textContent;
}

function picPopupOpened () {
  popImage.src = this._link;
  popImage.alt = this._name;
  popFigcaption.textContent = this._name;
  openPopup(picPopup);
}

function editSubmitHandler (evt) {
    evt.preventDefault();
    const editValidator = new FormValidator(config, formElementEdit);
    editValidator._enableValidation();
    name.textContent = bio.value;
    status.textContent = statusInfo.value;
    closePopup(popupEdit);
}


function addSubmitHandler (evt) {
  evt.preventDefault();
  const addElement = {name, link,}
  addElement.name = popLand.value;
  addElement.link = popLink.value;
  const addValidator = new FormValidator(config, formElementAdd);
  addValidator._enableValidation();
  const card = new Card ('.elements__template', addElement, picPopupOpened);
  const cardItem = card.generateCard()
  renderCard(cardItem);
  closePopup(popupAdd);
  formElementAdd.reset();
  const submitButton = popupAdd.querySelector('.popup__submit');
  disabledButtonState(submitButton, config)
}

initialCards.forEach((item) => {
  const card = new Card ('.elements__template', item, picPopupOpened);
  const cardItem = card.generateCard()

  renderCard(cardItem);
});

function renderCard(cardItem) {
  elements.prepend(cardItem);
}

openEditButton.addEventListener('click', popupEditOpen);

openAddButton.addEventListener('click', function(){openPopup(popupAdd)});

popupsCloseButtons.forEach(function(e) {
  e.addEventListener('click', function(close) {
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

formElementEdit.addEventListener('submit', editSubmitHandler);

formElementAdd.addEventListener('submit', addSubmitHandler);