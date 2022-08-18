import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popImage = this._popup.querySelector('.popup__image');
        this._popFigcaption = this._popup.querySelector('.popup__figcaption');
    }

    open(data){
      this._popImage.src = data.llink;
      this._popImage.alt = data.lland;
      this._popFigcaption.textContent = data.lland;
      super.open();
    }
}