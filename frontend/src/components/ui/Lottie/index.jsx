import Lottie from "lottie-react";
import lottieIT from "../../../assets/lottie/gifHome.json";

function GifHome() {
  return (
    <div className="w-80 h-auto lg:w-80 lg:h-80">
      <Lottie animationData={lottieIT} loop autoplay />
    </div>
  );
}

export default GifHome;
