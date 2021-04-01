import helloWord from "./hello.js";
import worldWord from "./world.js";
import css from "./style.css";

document.querySelector("#root").innerHTML = `${helloWord} ${worldWord}`;
console.log(css);
