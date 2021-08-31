import Vue from 'vue'
import axios from 'axios'


axios.defaults.baseURL = 'http://imoveis.teste/api'

Vue.use({
    install(Vue) {
            Vue.prototype.$http = axios
    }
})