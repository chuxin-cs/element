import type {App} from "vue"
import ElementPlus from "element-plus"

export function loadElementPlus(app: App) {
    app.use(ElementPlus);
}
