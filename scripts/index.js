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
const elementsTemplate = document.querySelector('.elements__template').content;
const elements = document.querySelector('.elements');
const popImage = picPopup.querySelector('.popup__image');
const popFigcaption = picPopup.querySelector('.popup__figcaption');

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

function editSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = bio.value;
    status.textContent = statusInfo.value;
    closePopup(popupEdit);
}

function addSubmitHandler (evt) {
  evt.preventDefault();
  const addElement = {name, link,}
  addElement.name = popLand.value;
  addElement.link = popLink.value;
  renderCard(addElement);
  closePopup(popupAdd);
  formElementAdd.reset();
  const submitButton = popupAdd.querySelector('.popup__submit');
  disabledButtonState(submitButton, config)
}

function createNewElements (cell){
  const newElement = elementsTemplate.querySelector('.elements__cell').cloneNode(true);
  const elementPic = newElement.querySelector('.elements__image');
  const elementText = newElement.querySelector('.elements__name');
  elementText.textContent = cell.name;
  elementPic.src = cell.link;
  elementPic.alt = cell.name;

  const trashButton = newElement.querySelector('.elements__trash');
  trashButton.addEventListener('click', function(){
    newElement.remove();
  })

  const likeButton = newElement.querySelector('.elements__like-button');
  function pushLike(){
    likeButton.classList.toggle('elements__like-button_type_active')
  }
  likeButton.addEventListener('click', pushLike);
  
  elementPic.addEventListener('click', function picPopupOpened () {
    popImage.src = elementPic.src;
    popImage.alt = elementText.textContent;
    popFigcaption.textContent = elementText.textContent;
    openPopup(picPopup);
  })
  
  return newElement;
}

function renderCard(newElement) {
  elements.prepend(createNewElements(newElement));
}

initialCards.forEach(renderCard);

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