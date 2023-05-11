import React, {useState} from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name={"update-avatar"} titleText={"Обновить аватар"} buttonText={"Сохранить"} children={"card"}>
        <input required type="url" name="link" placeholder="https://somewebsite.com/someimage.jpg" id="update-input" className="popup__input popup__input_type_update" />
        <span className="popup__error update-input-error"></span>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name={"edit-profile"} titleText={"Редактировать профиль"} buttonText={"Сохранить"} children={"card"}>
        <input required type="text" name="name" placeholder="Имя" id="name-input" minLength="2" maxLength="40" className="popup__input popup__input_type_name" />
        <span className="popup__error name-input-error"></span>
        <input required type="text" name="about" placeholder="О себе" id="description-input" minLength="2" maxLength="200" className="popup__input popup__input_type_description" />
        <span className="popup__error description-input-error"></span>
      </PopupWithForm>
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name={"add-place"} titleText={"Новое место"} buttonText={"Создать"} children={"card"}>
        <input required type="text" name="name" placeholder="Название" id="title-input" minLength="2" maxLength="30" className="popup__input popup__input_type_title" />
        <span className="popup__error title-input-error"></span>
        <input required type="url" name="link" placeholder="Ссылка на картинку" id="link-input" className="popup__input popup__input_type_link" />
        <span className="popup__error link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name={"delete-card"} onClose={closeAllPopups} titleText={"Вы уверены?"} buttonText={"Да"} children={"card"}>
        <input required type="text" name="name" placeholder="Название" id="title-input" minLength="2" maxLength="30" className="popup__input popup__input_type_title" />
        <span className="popup__error title-input-error"></span>
        <input required type="url" name="link" placeholder="Ссылка на картинку" id="link-input" className="popup__input popup__input_type_link" />
        <span className="popup__error link-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;