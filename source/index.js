import helloWord from "./hello.js";
import worldWord from "./world.js";
import _ from "lodash";
import css from "./style.css";

document.querySelector("#root").innerHTML = _.join(
  [helloWord, worldWord],
  "? "
);
console.log(css);
