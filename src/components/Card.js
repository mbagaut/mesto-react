import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li>
      <article className="photos__item">
        <img
          className="photos__image"
          alt={props.card.name}
          style={{ backgroundImage: `url(${props.card.link})` }}
          onClick={handleClick}
        />
        <button
          className="photos__icon-del btn-opacity btn-opacity_type_low"
          type="button"
        />
        <div className="photos__string">
          <h2 className="photos__title">{props.card.name}</h2>
          <div className="photos__like-column">
            <button
              className="photos__icon btn-opacity btn-opacity_type_low"
              type="button"
            />
            <span className="photos__like-counter">
              {props.card.likes.length}
            </span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
