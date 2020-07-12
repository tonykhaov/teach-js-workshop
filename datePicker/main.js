const datePicker = document.querySelector("#date-picker");
const today = new Date();

const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const todayDay = today.getDate();

const formatToDoubleDigits = (number) => {
  const stringifiedNumber = number.toString();
  if (stringifiedNumber.length === 2) return number;
  return `0${number}`;
};

const YYYY_MM_DD = `${todayYear}-${formatToDoubleDigits(todayMonth)}-${formatToDoubleDigits(
  todayDay
)}`;

datePicker.max = YYYY_MM_DD;
datePicker.value = YYYY_MM_DD;
