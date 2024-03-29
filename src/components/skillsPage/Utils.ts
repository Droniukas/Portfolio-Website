const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export { getRandom };
