import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        paymentList: [],
        category: []
    },
    mutations: {
        setPaymentListData(state, payload){
            state.paymentList = payload
        },
        addDataToPaymentList(state, payload){
            state.paymentList.push(payload)
        },
        // editPaymentList(state, payload){
        //     Vue.set(state.paymentList, 0, payload)
        // }
        addCategory(state, payload){
            state.category = payload
        }
    },
    getters:{
        getPaymentList: state => state.paymentList,
        getFullPaymentValue: state => {
            return state.paymentList.reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryFull: state => {
            return state.paymentList.map(i=> i.category)
        },
        getCategoryList: state => {
            return state.category
        },
    },
    actions: {
        someAction({commit}, res){
            commit('setPaymentListData', res)
        },
        fetchCategoryList({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(['Food', 'Transport', 'Education', 'Sport'])
                }, 1000)
            })
                .then(res => commit('addCategory', res))
        },
        fetchData({dispatch}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = []
                    for (let i = 1; i<110; i++){
                        items.push({
                            date: '01.07.2021',
                            category: "Food",
                            value: i,
                            id: i
                        })
                    }
                    resolve(items)
                }, 2000)
            })
                .then(res=> dispatch('someAction', res))
        }
    }
})
