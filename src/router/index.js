import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import index from '@/components/account/index.vue'



Vue.use(Router)
Vue.use(VueResource)

//filters
/*Vue.filter('to-uppercase', function (value) {
return value.toUpperCase()
});*/

Vue.filter('snipper', function(value) {
	return value.slice (0, 100) + '...';
})

/*//custom directive
Vue.directives('rainbow', {
bind(el, biding, vnode){
el.style.color = "#" + Math.random().toString().slice(0,5);
}
})*/

//creating routing for the components
export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		
	]
})
