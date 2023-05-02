const getRandomMs = () => {
    const random = Math.random();
    if (random < 0.25) {
      return 1000;
    } else if (random < 0.5) {
      return 1500;
    } else if (random < 0.75) {
      return 2000;
    } else {
      return 3000;
    }
  }

export default getRandomMs;