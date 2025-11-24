import useWindowDimensions from "./useWindowDimensions";

function useResponsivity() {
  const { width } = useWindowDimensions();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesk = width >= 1024;
  return { isMobile, isTablet, isDesk, width };
}

export default useResponsivity;
