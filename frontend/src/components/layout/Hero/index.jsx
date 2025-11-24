import useResponsivity from "../../../hooks/useResponsivity";
import imgMobile from "../../../assets/img/mobile/home-mobile-minutos-telecom.webp";
import imgTablet from "../../../assets/img/tablet/home-tablet-minutos-telecom.webp";
import imgDesk from "../../../assets/img/desktop/home-desktop-minutos-telecom.webp";

function Hero() {
  const { isMobile, isTablet, isDesk } = useResponsivity();

  return (
    <div className="lg:flex">
      {isMobile && <img className="w-full" src={imgMobile} alt="" />}
      {isTablet && (
        <img className="w-full mt-[-84px] z-0" src={imgTablet} alt="" />
      )}
      {isDesk && <img src={imgDesk} alt="" />}
      <div className="bg-azulBg">oi</div>
    </div>
  );
}

export default Hero;
