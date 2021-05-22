import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <section
        className={`popup popup_type_${props.name} ${
          props.isOpen && "popup_opened"
        }`}
      >
        <div className="popup__overlay" onClick={props.onClose} />
        <div className="popup__content">
          <button
            onClick={props.onClose}
            className="popup__close btn-opacity btn-opacity_type_medium"
            type="button"
          />
          <h2 className="popup__title">{props.title}</h2>
          <form
            className="popup__form"
            name={props.name}
            action="#"
            method="POST"
          >
            <fieldset className="popup__fieldset">{props.children}</fieldset>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;
