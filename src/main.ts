// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';
// import AugurAPI from './AugurAPI';
// Vue.config.productionTip = false;

// // interface MyWindow extends Window {
// //   AugurAPI: AugurAPI;
// // }
// // declare let window: MyWindow;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

// let a = new AugurAPI('http://localhost:5000');

// let r = a.Repo({repo_id: 21000, repo_group_id: 20});
// r.openIssuesCount().then((data:any)=>{
//   console.log(data)
// })

require('./Augur').default()