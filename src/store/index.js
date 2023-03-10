import {
  createStore
} from 'vuex'
 import {cityModule} from './modules/cityModule.js'
 import {commonModule} from './modules/common.js'

 export default createStore({
  modules:{
    city:cityModule,
    common: commonModule,
  }
})
