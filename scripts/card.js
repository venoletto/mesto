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

    _handleLikeButton(){
      this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_type_active');
    }

    _handleTrashButton(){
      this._element.remove();
      this._element = null;
    }

    _setEventListeners() {
      this._element.querySelector('.elements__like-button').addEventListener('click', () => {
        this._handleLikeButton();
      });

      this._element.querySelector('.elements__trash').addEventListener('click', () => {
        this._handleTrashButton();
      });

      this._image.addEventListener('click', () => {
        this._handleImageClick(this._link, this._name);
      });
    }
  }

export default Card;