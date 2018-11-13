import Vue from 'vue'; 
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Routers = [
	{
		path:'/index',
		meta:{
			title:'准备答题'
		},
		component:(resolve) => require(['../views/index.vue'],resolve)
	},
	{
		path:'/item',
		meta:{
			title:'开始答题'
		},
		component:(resolve) => require(['../views/item.vue'],resolve)
	},
	{
		path:'/score',
		meta:{
			title:'答题结束'
		},
		component:(resolve) => require(['../views/score.vue'],resolve)
	},
	{
		path:'*',
		redirect:'/index'
	}
];

const router = new VueRouter({
	mode:'history',
	routes: Routers
});

router.beforeEach((to,from,next)=>{
	window.document.title = to.meta.title;
	next();
})

export default router