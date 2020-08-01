// npm = app store for js
import isOdd from "is-odd";

console.log("is 3 odd?", isOdd(3));
console.log("is 10 odd?", isOdd(10));

// webpack for imports/exports handling
import films, { tomHanksFilms } from "./films";

console.log("films", films);
console.log("tomHanksFilms", tomHanksFilms);
