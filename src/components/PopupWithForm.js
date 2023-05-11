function PopupWithForm({name, titleText, buttonText, isOpen, onClose, children}) {
  
  return (
    <div className={`popup popup_type_${name}} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button onClick={ onClose } type="button" className="popup__close" ></button>
        <form className="popup__form" name={`popup-form-${name}`} novalidate>
          <h2 className="popup__header">{titleText}</h2>
          {children}
        <button type="submit" aria-label="save changes" className="popup__save">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}
  
export default PopupWithForm;