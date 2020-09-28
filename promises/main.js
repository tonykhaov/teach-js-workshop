const buttonGetData = document.querySelector(".btn-get-data");
const pText = document.querySelector(".new-data");

function getNewData() {
  pText.textContent = "loading...";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.5) {
        resolve(`This is your new data ${Date.now()}`);
      } else {
        reject(`Failed to get your new data...`);
      }
    }, 1000);
  });
}

function showNewData() {
  console.log("Fetching new data...");
  getNewData()
    .then((response) => {
      console.log(`Success: here's the new data ${response}`);
      pText.textContent = response;
    })
    .catch((err) => {
      console.error(`Failure: ${err}`);
      pText.textContent = err;
    });
}

buttonGetData.addEventListener("click", showNewData);
