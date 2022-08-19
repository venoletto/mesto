import Card from '../components/Card.js';
import Section from '../components/Section.js';
import initialCards from '../utils/Cards.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementAdd = document.querySelector('.popup__form-add');
const formElementEdit = document.querySelector('.popup__form-edit');
const popLand = document.querySelector('.popup__input_place_land');
const popLink = document.querySelector('.popup__input_place_link');
const bioInput = document.querySelector('.popup__input_place_username');
const statusInput = document.querySelector('.popup__input_place_status');
const cardsContainer = '.elements';
const cardTemplate = '.elements__template'
const validationConfig = {
  formSelector: '.popup__form',
  fieldsSelector: '.popup__fieldset',
  inputList: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_invalid',
  inputErrorClass: 'popup__input_type_invalid',
  errorClass: 'popup__input-error_type_active',
};

const popupEdit = new PopupWithForm('.popup_type_edit', handleEditSubmit);
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm('.popup_type_add', handleAddSubmit)
popupAdd.setEventListeners();

const picPopup = new  PopupWithImage('.popup_type_opened-picture');
picPopup.setEventListeners();

const userInformation = new UserInfo ({bio: '.profile__text' , statusInfo: '.profile__subtext'});

function createCard(cardData){
  const card = new Card (cardData, cardTemplate, picPopup.open.bind(picPopup));
  const cardItem = card.generateCard()
  return cardItem;
}

const cardBlock = new Section({
  items: initialCards, renderer: (item) => {
    cardBlock.addItem(createCard(item));
  }
}, cardsContainer);
cardBlock.renderItems();

function handleEditUser(){
  const { bio, statusInfo } = userInformation.getUserInfo();
  bioInput.value = bio;
  statusInput.value = statusInfo;
  popupEdit.open();
}

function handleEditSubmit (data) {
  userInformation.setUserInfo(data)
  popupEdit.close();
}

buttonEdit.addEventListener('click', handleEditUser);

function handleAddSubmit (cardData) {
  cardBlock.addItem(createCard(cardData));
  popupAdd.close();
}

buttonAdd.addEventListener('click', function () {
  placeAddValidation.toggleButtonState();
  popupAdd.open();
});

const placeEditValidation = new FormValidator(validationConfig, formElementEdit);
placeEditValidation.enableValidation();

const placeAddValidation = new FormValidator(validationConfig, formElementAdd);
placeAddValidation.enableValidation();