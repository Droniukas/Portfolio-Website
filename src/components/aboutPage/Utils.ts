export const calculateMiddleDivLeftSideWidth = (viewportWidth: number): number => {
  if (viewportWidth > 1050) {
    return 50;
  } else if (viewportWidth < 650) {
    return 100;
  } else {
    return (-1 / 8) * viewportWidth + 181.25;
  }
};
