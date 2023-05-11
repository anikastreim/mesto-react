function Card({card, onCardClick}) {
  
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="gallery">
      <button type="button" aria-label="delete card" className="gallery__bin"></button>
      <img onClick={handleCardClick} src={card.link} alt={card.name} className="gallery__image" />
      <div className="gallery__place">
        <h2 className="gallery__caption">{card.name}</h2>
        <div className="gallery__container">
          <button type="button" aria-label="like card" className="gallery__like"></button>
          <div className="gallery__counter">{card.likes.length}</div>
        </div>
      </div> 
    </div>
  );
}
  
export default Card;