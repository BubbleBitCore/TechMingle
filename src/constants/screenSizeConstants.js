export const mobileScreen = "mobile"; // represents mobile screen size
export const residueScreen = "residue"; // represents all other screen sizes other than mobile
export const checkScreenSize = () => {
  const width = window.innerWidth;

  if (width <= 480) {
    return mobileScreen;
  } else {
    return residueScreen; // residueScreen = desktop,tablets...
  }
};
