const FancyButton = ({ text1 = "Button", text2 = "Buttons" }) => {
  return (
    <>
      <div class="fancyBtnWrapper">
        <button class="btn">
          <div class="btn__bg">
            <span class="btn__bg__layer btn__bg__layer-first"></span>
            <span class="btn__bg__layer btn__bg__layer-second"></span>
            <span class="btn__bg__layer btn__bg__layer-third"></span>
          </div>

          <span class="btn__text-out">{text1}</span>
          <span class="btn__text-in">{text2}</span>
        </button>
      </div>
    </>
  );
};

export default FancyButton;
