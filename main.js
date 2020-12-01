import Vue from 'vue'
import App from './App'
import validate from '@/commont/ys-validate.js'

Vue.config.productionTip = false

Vue.prototype.$validate = validate

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
