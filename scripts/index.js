let closeButton = document.querySelectorAll('.popup__close-button');
let popupEdit = document.querySelector('.popup__edit');
let popupAdd = document.querySelector('.popup__add');
let openEditButton = document.querySelector('.profile__edit-button');
let openAddButton = document.querySelector('.profile__add-button');
let name = document.querySelector('.profile__text');
let status = document.querySelector('.profile__subtext');
let formElementAdd = document.querySelector('.popup__form-add');
let formElementEdit = document.querySelector('.popup__form-edit');
let bio = document.querySelector('.popup__input_place_username');
let statusInfo = document.querySelector('.popup__input_place_status');
let popLand = document.querySelector('.popup__input_place_land');
let popLink = document.querySelector('.popup__input_place_link');

function openPopup (i) {
  i.classList.add('popup_opened')
}

function closePopup (i) {
  i.classList.remove('popup_opened');
}

function popupEditOpen(){
  openPopup(popupEdit)
  bio.value = name.textContent;
  statusInfo.value = status.textContent;
}

openEditButton.addEventListener('click', popupEditOpen);

openAddButton.addEventListener('click', function(){openPopup(popupAdd)});

closeButton.forEach(function(e) {
  e.addEventListener('click', function(close) {
      const actualPopup = close.target.closest('.popup');
      closePopup(actualPopup);
  });
});

function editSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = bio.value;
    status.textContent = statusInfo.value;
    closePopup(popupEdit);
}

function addSubmitHandler (evt) {
  evt.preventDefault();
  closePopup(popupAdd);
}

formElementEdit.addEventListener('submit', editSubmitHandler);

formElementAdd.addEventListener('submit', addSubmitHandler);
















const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let elementsTemplate = document.querySelector('.elements__template').content;
let elements = document.querySelector('.elements');

function startElements (cell){
  let newElement = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  newElement.querySelector('.elements__name').textContent = cell.name;
  newElement.querySelector('.elements__image').src = cell.link;
  elements.insertAdjacentElement('afterbegin', newElement);

  return newElement;
}

initialCards.forEach(startElements);