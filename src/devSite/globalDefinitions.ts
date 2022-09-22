/*
  Creates global variables used in on-init and on-render
*/

import customProperties from "../custom-properties.json";
import { defaultPanelOptions } from "../../panelOptions.config.mjs";

window.customProperties = customProperties;
window.options = defaultPanelOptions;
