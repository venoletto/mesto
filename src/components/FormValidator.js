class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validationConfig.inputList)
    );
    this._buttonElement = formElement.querySelector(
      this._validationConfig.buttonElement
    );
  }

  _showInputError(formInput) {
    const errorMessage = this._formElement.querySelector(
      `.popup__input-error_place_${formInput.name}`
    );
    formInput.classList.add(this._validationConfig.inputErrorClass);
    errorMessage.textContent = formInput.validationMessage;
    errorMessage.classList.add(this._validationConfig.errorClass);
  }

  _hideInputError(formInput) {
    const errorMessage = this._formElement.querySelector(
      `.popup__input-error_place_${formInput.name}`
    );
    formInput.classList.remove(this._validationConfig.inputErrorClass);
    errorMessage.textContent = " ";
    errorMessage.classList.remove(this._validationConfig.errorClass);
  }

  _checkInputValidity(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput);
    } else {
      this._hideInputError(formInput);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((formInput) => {
      return !formInput.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(
        this._validationConfig.inactiveButtonClass
      );
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList.forEach((formInput) => {
      formInput.addEventListener("input", () => {
        this._checkInputValidity(formInput);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
