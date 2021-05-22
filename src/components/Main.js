import React from "react";
import beketov from "../images/beketov.jpeg";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setСards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserAvatar(data.avatar);
      setUserDescription(data.about);
      setUserName(data.name);
    });
  }, []);

  React.useEffect(() => {
    api.getCards().then((arr) => {
      setСards(arr);
    });
  }, []);

  return (
    <>
      <main className="main page__main">
        <section className="person main__person">
          <div className="person__header">
            <div className="person__avatar">
              <img
                className="person__photo"
                src={beketov}
                style={{ backgroundImage: `url(${userAvatar})` }}
                alt="П. И. Бекетов"
              />
              <button
                onClick={props.onEditAvatar}
                id="popup-avatar-but"
                className="person__photo-btn"
              />
            </div>
            <div className="person__container">
              <div className="person__string">
                <h1 className="person__title">{userName}</h1>
                <button
                  onClick={props.onEditProfile}
                  id="popup-redact-but"
                  className="person__icon-edit btn-opacity btn-opacity_type_medium"
                  type="button"
                />
              </div>
              <p className="person__job">{userDescription}</p>
            </div>
            <button
              onClick={props.onAddPlace}
              id="popup-add-but"
              className="person__button btn-opacity btn-opacity_type_medium"
              type="button"
            />
          </div>
        </section>

        <section className="main__grid">
          <ul id="photos" className="photos">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
