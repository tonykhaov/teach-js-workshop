const timer = document.querySelector(".timer");

const minutes = timer.querySelector(".minutes");
const seconds = timer.querySelector(".seconds");
const colon = timer.querySelector(".colon");
const message = timer.querySelector(".message");

const interval = setInterval(() => {
  const minutesInt = parseInt(minutes.textContent);
  const secondsInt = parseInt(seconds.textContent);

  if (minutesInt === 0 && secondsInt === 1) {
    displayMessage(minutes, colon, seconds, message);
  }

  if (secondsInt <= 10) {
    seconds.textContent = `0${secondsInt - 1}`;
  } else {
    seconds.textContent = secondsInt - 1;
  }

  if (secondsInt === 0) {
    minutes.textContent = `0${minutesInt - 1}`;
    seconds.textContent = 59;
  }
  console.log(`${minutes.textContent}:${seconds.textContent}`);
  if (minutesInt === 0 && secondsInt <= 31) {
    return !timer.classList.contains("alert") && timer.classList.add("alert");
  }
}, 1000);

const displayMessage = (minutes, colon, seconds, message) => {
  minutes.style.display = "none";
  colon.style.display = "none";
  seconds.style.display = "none";
  message.style.display = "inline";
  return clearInterval(interval);
};
