class Card{
    constructor(container, data, handleImageClick){
        this._name = data.name;
        this._link = data.link;
        this._container = container;
        this._handleImageClick = handleImageClick;
    }

    _getTemplate(){
      const cardElement = document.querySelector(this._container).content.querySelector('.elements__cell').cloneNode(true);
      return cardElement;
    }

    generateCard() {
      this._element = this._getTemplate();
      this._image = this._element.querySelector('.elements__image');
      this._setEventListeners();
  
      this._image.src = this._link;
      this._image.alt = this._name;
      this._element.querySelector('.elements__name').textContent = this._name;
  
      return this._element;
    }

    _likeButton(){
      this.likeButton.classList.toggle('elements__like-button_type_active')
    }

    _trashButton(){
      this._element.remove();
    }

    _handleImageClick(){
      this._image.src;
      this._image.alt
      this._element.querySelector('.elements__name').textContent;
    }

    _setEventListeners() {
      this._element.querySelector('.elements__like-button').addEventListener('click', () => {
        this._likeButton();
      });

      this._element.querySelector('.elements__trash').addEventListener('click', () => {
        this._trashButton();
      });

      this._image.addEventListener('click', () => {
        this._handleImageClick(this.data);
      });
    }
  }

export default Card;
/* function createNewElements (cell){
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
  */