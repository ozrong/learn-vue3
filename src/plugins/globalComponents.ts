import type { App } from 'vue'
import * as EleIcon from '@element-plus/icons-vue'
import HelloWorld from '../components/HelloWorld.vue';
import TestVue from "../components/TestVue.vue";

/**
 * 全局注册自定义组件
 * @param app
 */
export function setupGlobalComponents(app: App) {
	//  element-plus/icons图标全局引入
	const icons = EleIcon as any
	for (const i in icons) {
		app.component(`Ele-${icons[i].name}`, icons[i])
	}
	// 自定义组件全局引入 （通用组件才能全局引入）
	app.component(HelloWorld)
	app.component(TestVue)
}
