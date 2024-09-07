export const textSlideUp = (amount, duration, delay) => {
  return {
    hidden: {
      y: amount,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeIn",
      },
    },
  };
};

export const cardShowUp = (amount, duration, delay) => {
  return {
    hidden: {
      scale: amount,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeIn",
      },
    },
  };
};
