const scrollTopSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export { scrollTopSmooth, scrollTop };
