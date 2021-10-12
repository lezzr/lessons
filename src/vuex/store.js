import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        searchValue:'',
        products:[],
        cart:[]
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) =>{
            if(state.cart.length){
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.article === product.article){
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if(!isProductExists) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index)=>{
            state.cart.splice(index, 1)
        },
        CLEAR_CART:(state)=>{
            state.cart.splice(0, state.cart.length)
        },
        INCREMENT:(state, index)=>{
            state.cart[index].quantity++
        },
        DECREMENT:(state, index)=>{
            if(state.cart[index].quantity > 1){
                state.cart[index].quantity--
            }
        },
        SET_SEARCH_VALUE_TO_VUEX:(state, value)=>{
            state.searchValue = value
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({ commit }){
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) =>{
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index)
        },
        INCREMENT_CART_ITEM({commit}, index){
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index){
            commit('DECREMENT', index)
        },
        CLEAR_CART({commit}){
            commit('CLEAR_CART')
        },
        GET_SEARCH_VALUE_TO_VUEX({commit}, value){
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            return state.cart;
        },
        SEARCH_VALUE(state){
            return state.searchValue
        }
    }
});

export default store;
