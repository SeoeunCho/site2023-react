import React from "react";
import { scrollTopSmooth } from "../../utils/scrollEvents";

const ScrollTopBtn = () => {
  return (
    <button className="top-btn" onClick={() => scrollTopSmooth()}>
      TOP
    </button>
  );
};

export default ScrollTopBtn;
