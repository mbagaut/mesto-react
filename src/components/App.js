import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard("");
  }

  return (
    <>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="popupAvatarForm"
        title="Обновить аватар"
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <label className="popup__field popup__field_avatar">
            <input
              className="popup__input"
              tabIndex={1}
              id="link-input2"
              type="url"
              name="avatarLink"
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
            Сохранить
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name="popupRedactForm"
        title="Редактировать профиль"
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <label className="popup__field">
            <input
              className="popup__input"
              tabIndex={1}
              id="name-input"
              type="text"
              name="name"
              placeholder="Жак-Ив Кусто"
              required
              minLength={2}
              maxLength={40}
            />
            <span className="name-input-error" />
          </label>
          <label className="popup__field">
            <input
              className="popup__input"
              tabIndex={2}
              id="job-input"
              type="text"
              name="about"
              placeholder="Исследователь океана"
              required
              minLength={2}
              maxLength={200}
            />
            <span className="job-input-error" />
          </label>
          <button
            className="popup__submit-btn btn-opacity btn-opacity_type_high"
            tabIndex={18}
            type="submit"
          >
            Сохранить
          </button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name="popupAddForm"
        title="Новое место"
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <label className="popup__field">
            <input
              className="popup__input"
              tabIndex={1}
              id="card-name-input"
              type="text"
              name="cardName"
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

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      {/* 
      Не удалил пока, ещё буду с этим работать
      <section id="popup-del" className="popup">
        <div className="popup__overlay" />
        <div className="popup__content">
          <button
            className="popup__close btn-opacity btn-opacity_type_medium"
            type="button"
          />
          <h2 className="popup__title popup__title_popup-del">Вы уверены?</h2>
          <form
            className="popup__form"
            name="popupDelForm"
            action="#"
            method="POST"
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
          </form>
        </div>
      </section>
     */}
    </>
  );
}

export default App;
