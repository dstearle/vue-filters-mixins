import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.filter('to-lowercase', function(value) {
    
    return value.toLowerCase();
    
});

//Global mixin that can be used by every file in the app
Vue.mixin({
    
    created() {
        
        console.log('Global Mixin - Created Hook');
        
    }
    
});

new Vue({
  render: h => h(App),
}).$mount('#app')
