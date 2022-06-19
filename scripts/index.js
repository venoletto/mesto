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
let picPopup = document.querySelector('.popup__opened-picture');

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
  let addElement = {name, link,}
  addElement.name = popLand.value;
  addElement.link = popLink.value;
  newElements(addElement);
  closePopup(popupAdd);
  formElementAdd.reset();
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

function newElements (cell){
  let newElement = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  let elementPic = newElement.querySelector('.elements__image');
  let elementText = newElement.querySelector('.elements__name');
  elementText.textContent = cell.name;
  elementPic.src = cell.link;
  elements.insertAdjacentElement('afterbegin', newElement);


  let trashButton = document.querySelector('.elements__trash');
  trashButton.addEventListener('click', function(){
    newElement.remove();
  })

  let likeButton = newElement.querySelector('.elements__like-button')
  likeButton.addEventListener('click', function(){
    likeButton.classList.toggle('elements__like-button_type_active')
  })
  
  elementPic.addEventListener('click', function picPopupOpened () {
    let popImage = picPopup.querySelector('.popup__image');
    let popFigcaption = picPopup.querySelector('.popup__figcaption');
    popImage.src = elementPic.src;
    popFigcaption.textContent = elementText.textContent;
    openPopup(picPopup);
  })
  
  return newElement;
}

initialCards.forEach(newElements);