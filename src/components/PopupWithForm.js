import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSumbit){
        super(popupSelector);
        this._handleFormSubmit = handleFormSumbit;
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = this._form.querySelectorAll('.popup__input')
    }

    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach( (input) => {
          this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners(); 
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleFormSubmit(this._getInputValues());
        });
      }

      close(){
        this._form.reset();
        super.close();
      }
}