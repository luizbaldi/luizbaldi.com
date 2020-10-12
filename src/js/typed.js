import Typed from "typed.js";

export const init = () => {
  const options = {
    strings: ["", "<p>ops, almost forgot...</p>", "<p>simplicity, always.</p>"],
    typeSpeed: 50,
    startDelay: 3600,
  };

  const typed = new Typed(".typed", options);
};
