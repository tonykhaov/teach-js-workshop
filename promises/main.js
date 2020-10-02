const buttonGetData = document.querySelector(".btn-get-data");
const newDatas = document.querySelector(".new-datas");

const datas = [];

function getNewData() {
  newDatas.innerHTML = "<p>Loading...</p>";
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
  getNewData()
    .then((response) => {
      console.log(`Success: here's the new data ${response}`);
      datas.unshift(response);
    })
    .catch((err) => {
      console.error(`Failure: ${err}`);
      datas.unshift(err);
    })
    .finally(() => {
      newDatas.innerHTML = datas
        .map((data) => {
          return `
          <li>${data}</li>
        `;
        })
        .join("");
    });
}

buttonGetData.addEventListener("click", showNewData);
