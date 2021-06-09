import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar, buttonText } = props;

  // Выключение кнопки пока не понял как вынести в PopupWithForm. Когда сдам проект - подумаю неспеша)
  // const submitButton = React.useRef();
  // const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const [validationError, setValidationError] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [eventTarget, setEventTarget] = React.useState({});

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(eventTarget.value);
    eventTarget.value = "";
  }

  // function toggleButtonState() {
  //   if (buttonDisabled) {
  //     submitButton.current.classList.add("popup__submit-btn_disabled");
  //     submitButton.current.setAttribute("disabled", true);
  //   } else {
  //     submitButton.current.classList.remove("popup__submit-btn_disabled");
  //     submitButton.current.removeAttribute("disabled");
  //   }
  // }

  function clearInputValue() {
    eventTarget.value = "";
    setValidationError(false);
    setErrorMessage("");
    onClose();
  }

  function checkInputValidity(eTarget) {
    if (eTarget.validity.valid) {
      setValidationError(false);
      setErrorMessage("");
      // setButtonDisabled(false);
    } else {
      setValidationError(true);
      setErrorMessage(eTarget.validationMessage);
      // setButtonDisabled(true);
    }
  }

  function onChange(e) {
    setEventTarget(e.target);
    checkInputValidity(e.target);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="popupAvatarForm"
      title="Обновить аватар"
      onClose={clearInputValue}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      defaultButtonText={"Сохранить"}
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
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
