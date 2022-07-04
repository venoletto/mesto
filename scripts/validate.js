const config = {
    formSelector: '.popup__form',
    fieldsSelector: '.popup__fieldset',
    inputList: '.popup__input_valid',
    buttonElement: '.popup__submit',
    inactiveButtonClass: 'popup__submit_type_invalid',
    inputErrorClass: 'popup__input_type_invalid',
    errorClass: 'popup__input-error_type_active',
  };

  function showInputError(formElement, formInput, settings){
    const errorMessage = formElement.querySelector(`.popup__input-error_place_${formInput.name}`);
    formInput.classList.add(settings.inputErrorClass);
    errorMessage.textContent = formInput.validationMessage;
    errorMessage.classList.add(settings.errorClass);
  };

  function hideInputError(formElement, formInput, settings){
    const errorMessage = formElement.querySelector(`.popup__input-error_place_${formInput.name}`);
    formInput.classList.remove(settings.inputErrorClass);
    errorMessage.textContent = " ";
    errorMessage.classList.remove(settings.errorClass);
  };

  function checkInputValidity(formElement, formInput, settings){
    if (!formInput.validity.valid){
      showInputError(formElement, formInput, settings);
    } else {
      hideInputError(formElement, formInput, settings);
    }
  };

  function hasInvalidInput(inputList){
    return inputList.some((formInput) => {
      return !formInput.validity.valid;
    })
  };

  function toggleButtonState(inputList, buttonElement, settings){
    if (hasInvalidInput(inputList, settings)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  function setEventListeners(formElement, settings){
    const inputList = Array.from(formElement.querySelectorAll(settings.inputList));
    const buttonElement = formElement.querySelector(settings.buttonElement);
    toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        checkInputValidity(formElement, formInput, settings);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  };

  function enableValidation(settings){
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      const fieldsetList = Array.from(formElement.querySelectorAll(settings.fieldsSelector));
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet, settings);
      });
        });
      };
  

  enableValidation(config);