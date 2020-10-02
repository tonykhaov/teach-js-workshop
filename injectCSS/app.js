const styleTag = document.createElement("style");

const colors = {
  primary: "green",
  secondary: "tomato",
};

styleTag.textContent = `body {
  height: 150vh;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-size: 36px;
  text-align: center;
}`;

setTimeout(() => {
  document.body.appendChild(styleTag);
}, 2000);
