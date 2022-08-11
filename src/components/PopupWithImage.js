import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup){
        super(popup);
        this._popImage = this._popup.querySelector('.popup__image');
        this._popFigcaption = this._popup.querySelector('.popup__figcaption');
    }

    open(data){
      this._popImage.src = data.link;
      this._popImage.alt = data.name;
      this._popFigcaption.textContent = data.name;
      super.open();
    }
}