export const createElement = (element, className, innerText = '') => {
    const e = document.createElement(element);
    e.className = className;
    e.innerText = innerText;
    return e;
  };