
class FormValidator{
  constructor(config, formElement){
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputList));
    this._buttonElement = formElement.querySelector(this._config.buttonElement);
  }

_showInputError(formInput){
  const errorMessage = this._formElement.querySelector(`.popup__input-error_place_${formInput.name}`);
  formInput.classList.add(this._config.inputErrorClass);
  errorMessage.textContent = formInput.validationMessage;
  errorMessage.classList.add(this._config.errorClass);
};

_hideInputError(formInput){
  const errorMessage = this._formElement.querySelector(`.popup__input-error_place_${formInput.name}`);
  formInput.classList.remove(this._config.inputErrorClass);
  errorMessage.textContent = " ";
  errorMessage.classList.remove(this._config.errorClass);
};

_checkInputValidity(formInput){
  if (!formInput.validity.valid){
    this._showInputError(formInput);
  } else {
    this._hideInputError(formInput);
  }
};

_hasInvalidInput(){
  return this._inputList.some((formInput) => {
    return !formInput.validity.valid;
   })
   }

_toggleButtonState(){
  if (this._hasInvalidInput()) {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'disabled');
  } else {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }
};

_setEventListeners(){
  this._inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      this._checkInputValidity(formInput);
      this._toggleButtonState();
    });
  });
};

enableValidation(){
  this._setEventListeners();
    };
  }

  export default FormValidator;