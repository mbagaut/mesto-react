import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar, buttonText } = props;
  const linkInput = React.useRef();
  const submitButton = React.useRef();
  const [validationError, setValidationError] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(linkInput.current.value);
    linkInput.current.value = "";
  }

  function clearInputValue() {
    linkInput.current.value = "";
    setValidationError(false);
    setErrorMessage("");
    onClose();
  }

  function toggleButtonState(disabled) {
    if (disabled) {
      submitButton.current.classList.add("popup__submit-btn_disabled");
      submitButton.current.setAttribute("disabled", true);
    } else {
      submitButton.current.classList.remove("popup__submit-btn_disabled");
      submitButton.current.removeAttribute("disabled");
    }
  }

  function checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      setValidationError(false);
      setErrorMessage("");
      toggleButtonState(false);
    } else {
      setValidationError(true);
      setErrorMessage(inputElement.validationMessage);
      toggleButtonState(true);
    }
  }

  function onChange(e) {
    checkInputValidity(e.target);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="popupAvatarForm"
      title="Обновить аватар"
      onClose={clearInputValue}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__field popup__field_avatar">
          <input
            className={`popup__input ${
              validationError && "popup__input_error"
            }`}
            tabIndex={1}
            id="link-input2"
            type="url"
            name="avatarLink"
            ref={linkInput}
            onChange={onChange}
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className={`link-input-error ${
              validationError && "popup__input-error"
            }`}
          >
            {errorMessage}
          </span>
        </label>
        <button
          className="popup__submit-btn btn-opacity btn-opacity_type_high"
          tabIndex={18}
          type="submit"
          ref={submitButton}
        >
          {buttonText}
        </button>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
