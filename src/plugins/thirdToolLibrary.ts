import {App} from "vue";
import ElementPlus from 'element-plus'

export function setThirdToolLibrary(app: App<Element>){
    app.use(ElementPlus)
}
