class Card{
    constructor(data, container, handleImageClick){
        this._lland = data.lland;
        this._llink = data.llink;
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
      this._buttonLike = this._element.querySelector('.elements__like-button');
      this._buttonTrash = this._element.querySelector('.elements__trash');
      this._setEventListeners();
  
      this._image.src = this._llink;
      this._image.alt = this._lland;
      this._element.querySelector('.elements__name').textContent = this._lland;
  
      return this._element;
    }

    _handleLikeCard(){
      this._buttonLike.classList.toggle('elements__like-button_type_active');
    }

    _handleDeleteCard(){
      this._element.remove();
      this._element = null;
    }

    _setEventListeners() {
      this._buttonLike.addEventListener('click', () => {
        this._handleLikeCard();
      });

      this._buttonTrash.addEventListener('click', () => {
        this._handleDeleteCard();
      });

      this._image.addEventListener('click', () => {
        this._handleImageClick({ lland: this._lland, llink: this._llink });
      });
    }
  }

export default Card;