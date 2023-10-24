import type {App} from "vue";
import {loadElementPlus} from "./element-plus";

export function loadPlugins(app: App) {
    loadElementPlus(app);
}