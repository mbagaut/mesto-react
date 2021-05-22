import React from "react";

function ImagePopup(props) {
  const { card, onClose } = props;
  return (
    <section
      id="popup-img"
      className={`popup popup_img-only ${card && "popup_opened"}`}
    >
      <div className="popup__overlay" onClick={onClose} />
      <div className="popup__content popup__content_img-only">
        <button
          onClick={onClose}
          className="popup__close btn-opacity btn-opacity_type_medium"
          type="button"
        />
        <h2 className="popup__title popup__title_img-only">{card.name}</h2>
        <img className="popup__image" src={card && `${card.link}`} alt="#" />
      </div>
    </section>
  );
}

export default ImagePopup;
