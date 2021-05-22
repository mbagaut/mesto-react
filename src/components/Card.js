import React from "react";

function Card(props) {
  const { card, onDelCardIconClick, onCardClick } = props;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li>
      <article className="photos__item">
        <img
          className="photos__image"
          alt={card.name}
          style={{ backgroundImage: `url(${card.link})` }}
          onClick={handleClick}
        />
        <button
          className="photos__icon-del btn-opacity btn-opacity_type_low"
          type="button"
          onClick={onDelCardIconClick}
        />
        <div className="photos__string">
          <h2 className="photos__title">{card.name}</h2>
          <div className="photos__like-column">
            <button
              className="photos__icon btn-opacity btn-opacity_type_low"
              type="button"
              // style={{ display: `(${card})` }}
            />
            <span className="photos__like-counter">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
