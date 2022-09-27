import { render } from "solid-js/web";
import { App } from "./App";
import "./style.css";

if (theme.isDark) {
  htmlNode.children[1].classList.add("dark");
}

render(() => <App />, htmlNode.children[1]);
