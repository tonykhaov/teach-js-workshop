const btnAddEventListener = document.querySelector(".add-event-listener");
const btnRemoveEventListener = document.querySelector(".remove-event-listener");

let windowHasEventListener = false;

const addWindowListener = () => {
  if (windowHasEventListener) return;
  console.log("Add window event listener on resize");
  window.addEventListener("resize", handleResize);
  windowHasEventListener = !windowHasEventListener;
};
const removeWindowListener = () => {
  if (!windowHasEventListener) return;
  console.log("Remove window event listener on resize");
  window.removeEventListener("resize", handleResize);
  windowHasEventListener = !windowHasEventListener;
};

const handleResize = () => {
  console.log(window.innerWidth);
};

btnAddEventListener.addEventListener("click", addWindowListener);
btnRemoveEventListener.addEventListener("click", removeWindowListener);
