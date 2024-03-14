const FancyButton = ({ text1 = "Button", text2 = "Buttons" }) => {
  return (
    <>
      <div className="fancyBtnWrapper">
        <button className="btn">
          <div className="btn__bg">
            <span className="btn__bg__layer btn__bg__layer-first"></span>
            <span className="btn__bg__layer btn__bg__layer-second"></span>
            <span className="btn__bg__layer btn__bg__layer-third"></span>
          </div>

          <span className="btn__text-out select-none">{text1}</span>
          <span className="btn__text-in select-none">{text2}</span>
        </button>
      </div>
    </>
  );
};

export default FancyButton;
