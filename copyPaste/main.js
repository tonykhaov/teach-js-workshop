const copyButton = document.querySelector("button[id=copy]");
const copyText = document.querySelector(".copy input");

const copyElement = () => {
  copyText.select();
  document.execCommand("copy");
};

copyButton.addEventListener("click", copyElement);
