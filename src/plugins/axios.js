import Vue from 'vue'
import axios from 'axios'


axios.defaults.baseURL = 'https://crud-ususarios.teste/api'

Vue.use({
    install(Vue) {
            Vue.prototype.$http = axios
    }
})