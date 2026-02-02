import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { carouselImages } from "../../../data/Carousel";
import useResponsivity from "../../../hooks/useResponsivity";

// =======================
// Card
// =======================
export const Card = React.memo(function ({ data, dataIndex }) {
  const { coverMobile, coverTablet, coverDesk, title } = data[dataIndex];
  const startPos = React.useRef({ x: 0, y: 0 });
  const moved = React.useRef(false);
  const { isMobile, isTablet, isDesk } = useResponsivity();

  //todo const opacityClass = distanceFromCenter === 0 ? "opacity-100" : "opacity-40"; ---> precisa escrever distanceFromCenter como parâmetro da função e depois usar `${opacityClass}` na linha       className="w-full h-[350px] sm:h-[380px] md:h-[450px] lg:h-[70vh] select-none lg:p-10"

  const handleStart = (x, y) => {
    moved.current = false;
    startPos.current = { x, y };
  };

  const handleMove = (x, y) => {
    if (
      Math.abs(x - startPos.current.x) > 5 ||
      Math.abs(y - startPos.current.y) > 5
    ) {
      moved.current = true;
    }
  };

  const handleClick = (e) => {
    if (moved.current) e.preventDefault();
  };

  return (
    <div
      className="w-full h-[40vh] min-h-[350px] sm:h-[380px] md:h-[450px] lg:h-[75vh] ultra:h-[85vh] select-none lg:p-10"
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onTouchStart={(e) => {
        const t = e.touches[0];
        handleStart(t.clientX, t.clientY);
      }}
      onTouchMove={(e) => {
        const t = e.touches[0];
        handleMove(t.clientX, t.clientY);
      }}
    >
      <div onClick={handleClick}>
        <img
          src={
            isMobile
              ? coverMobile
              : isTablet
                ? coverTablet
                : isDesk
                  ? coverDesk
                  : null
          }
          alt={title}
          draggable={false}
          className="w-full h-full object-cover pointer-events-none rounded-md"
        />
      </div>
    </div>
  );
});

// =======================
// Carousel
// =======================
export default function ResponsiveCarousel() {
  const ref = React.useRef(null);
  const intervalRef = React.useRef(null);
  const { isDesk } = useResponsivity();

  const startAutoPlay = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      ref.current?.goNext(1);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  React.useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <div
      className="relative w-full z-0"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 768 && !isDesk) currentVisibleSlide = 1;

          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 550}
              carouselWidth={parentWidth}
              data={carouselImages}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />

      {/* Setas */}
      <Fab
        className="!absolute top-1/2 -translate-y-1/2 left-3 z-10"
        size="small"
        color="primary"
        onClick={() => {
          stopAutoPlay();
          ref.current?.goBack();
          startAutoPlay();
        }}
      >
        <ArrowBackIcon />
      </Fab>

      <Fab
        className="!absolute top-1/2 -translate-y-1/2 right-3 z-10"
        size="small"
        color="primary"
        onClick={() => {
          stopAutoPlay();
          ref.current?.goNext(1);
          startAutoPlay();
        }}
      >
        <ArrowForwardIcon />
      </Fab>
    </div>
  );
}
