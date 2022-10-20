import { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <a
        href="#"
        className="position-fixed  bottom-0 end-0 me-2 mb-3"
        style={{ display: visible ? "inline" : "none" }}
      >
        <button type="button" className="btn btn-primary" id="btn-back-to-top">
          <i className="bi bi-arrow-up"></i>
        </button>
      </a>
    </>
  );
};

export default ScrollToTop;
