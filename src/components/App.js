import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DelCardPopup from "./DelCardPopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDelCardPopupOpen, setIsDelCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [selectedDelCard, setSelectedDelCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [buttonText, setButtonText] = React.useState("");

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardList()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => console.log(`АЛЯРМ!: ${err}`));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  function handleEditAvatarClick() {
    setButtonText("");
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setButtonText("");
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setButtonText("");
    setIsAddPlacePopupOpen(true);
  }

  function handleDelCardClick(card) {
    setButtonText("");
    setSelectedDelCard(card);
    setIsDelCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDelCardPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(formValues) {
    setButtonText("Сохраняем...");
    api
      .changeUserInfo(formValues)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(`АЛЯРМ!: ${err}`))
      .finally(() => {
        setButtonText("Сохранить");
      });
  }

  function handleUpdateAvatar(avatarLink) {
    setButtonText("Сохраняем...");
    api
      .changeAvatar(avatarLink)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(`АЛЯРМ!: ${err}`))
      .finally(() => {
        setButtonText("Сохранить");
      });
  }

  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((cardsData) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? cardsData : c))
        );
      })
      .catch((err) => console.log(`АЛЯРМ!: ${err}`));
  }

  function handleCardDelete() {
    setButtonText("Удаляем...");
    api
      .deleteCard(selectedDelCard._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== selectedDelCard._id));
        closeAllPopups();
      })
      .catch((err) => console.log(`АЛЯРМ!: ${err}`))
      .finally(() => {
        setButtonText("Удалить");
      });
  }

  function handleAddPlaceSubmit(name, link) {
    setButtonText("Создаём...");
    api
      .postCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`АЛЯРМ!: ${err}`))
      .finally(() => {
        setButtonText("Создать");
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardDelIconClick={handleDelCardClick}
        cards={cards}
        onCardLike={handleCardLike}
      />

      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        buttonText={buttonText}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        buttonText={buttonText}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        buttonText={buttonText}
      />

      <DelCardPopup
        isOpen={isDelCardPopupOpen}
        onClose={closeAllPopups}
        onCardDel={handleCardDelete}
        buttonText={buttonText}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
