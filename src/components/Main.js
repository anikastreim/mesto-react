import React, {useState, useEffect} from "react";
import {api} from "../utils/Api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getInitialUserInfo(),
      api.getInitialCards()
    ])
    .then(([profileData, cards]) => {
      setUserName(profileData.name);
      setUserDescription(profileData.about);
      setUserAvatar(profileData.avatar);
      setCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);  

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__card">
          <button onClick={onEditAvatar} type="button" aria-label="edit profile image" className="profile__button">
            <div style={{backgroundImage: `url(${userAvatar})`}} className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} type="button" aria-label="open edit form" className="profile__edit"></button>
            <p className="profile__description">{userDescription}</p>    
          </div>
        </div>
        <button onClick={onAddPlace} type="button" aria-label="open add form" className="profile__add"></button>  
      </section>
      <section className="galleries">
        {cards.map(card => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </div>
  );
}

export default Main;
