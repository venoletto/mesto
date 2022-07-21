
class FormValidator{
  constructor(config, formElement){
    this._config = config;
    this._formElement = formElement;
    this._fieldsetList = Array.from(this._formElement.querySelectorAll(this._config.fieldsSelector));
  }

_showInputError(formElement, formInput, config){
  const errorMessage = this._formElement.querySelector(`.popup__input-error_place_${formInput.name}`);
  formInput.classList.add(this._config.inputErrorClass);
  errorMessage.textContent = formInput.validationMessage;
  errorMessage.classList.add(this._config.errorClass);
};

_hideInputError(formElement, formInput, config){
  const errorMessage = this._formElement.querySelector(`.popup__input-error_place_${formInput.name}`);
  formInput.classList.remove(this._config.inputErrorClass);
  errorMessage.textContent = " ";
  errorMessage.classList.remove(this._config.errorClass);
};

_checkInputValidity(formElement, formInput, config){
  if (!formInput.validity.valid){
    this._showInputError(formElement, formInput, config);
  } else {
    this._hideInputError(formElement, formInput, config);
  }
};

_hasInvalidInput(inputList){
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
   })
   }

_disabledButtonState(buttonElement, config){
  buttonElement.classList.add(this._config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 'disabled');
}

_enabledButtonState(buttonElement, config){
  buttonElement.classList.remove(this._config.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

_toggleButtonState(inputList, buttonElement, config){
  if (this._hasInvalidInput(inputList, config)) {
    this._disabledButtonState(buttonElement, config)
  } else {
    this._enabledButtonState(buttonElement, config)
  }
};

_setEventListeners(formElement, config){
  const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputList));
  const buttonElement = this._formElement.querySelector(this._config.buttonElement);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      _checkInputValidity(formElement, formInput, config);
      _toggleButtonState(inputList, buttonElement, config);
    });
  });
};

_enableValidation(config){
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((_formElement) => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      });
    };
  }

  export default FormValidator;