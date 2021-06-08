import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace(cardName, cardLink);
    setCardName("");
    setCardLink("");
  }

  function handleChangeCardName(e) {
    setCardName(e.target.value);
  }

  function handleChangeCardLink(e) {
    setCardLink(e.target.value);
  }

  function clearInputValue() {
    setCardName("");
    setCardLink("");
    onClose();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="popupAddForm"
      title="Новое место"
      onClose={clearInputValue}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__field">
          <input
            className="popup__input"
            tabIndex={1}
            id="card-name-input"
            type="text"
            name="cardName"
            onChange={handleChangeCardName}
            value={cardName}
            placeholder="Название"
            required
            minLength={2}
            maxLength={30}
          />
          <span className="card-name-input-error" />
        </label>
        <label className="popup__field">
          <input
            className="popup__input"
            tabIndex={2}
            id="link-input"
            type="url"
            name="cardLink"
            onChange={handleChangeCardLink}
            value={cardLink}
            placeholder="Ссылка на картинку"
            required
          />
          <span className="link-input-error" />
        </label>
        <button
          className="popup__submit-btn btn-opacity btn-opacity_type_high"
          tabIndex={18}
          type="submit"
        >
          Создать
        </button>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
