import React from "react";
import PopupWithForm from "./PopupWithForm";

function DelCardPopup(props) {
  const { isOpen, onClose, onCardDel } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onCardDel();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name="popupDelForm"
      title="Вы уверены?"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <button
          className="popup__submit-btn btn-opacity btn-opacity_type_high popup__submit-btn_popup-del"
          tabIndex={18}
          type="submit"
        >
          Да
        </button>
      </fieldset>
    </PopupWithForm>
  );
}

export default DelCardPopup;
