import Vue from 'vue'
import Vuex from 'vuex'

import cake1 from '../assets/cake1.jpg'
import cake2 from '../assets/cake2.jpg'
import cake3 from '../assets/cake3.jpg'

import cake4 from '../assets/cake4.jpg'
import cake5 from '../assets/cake5.jpg'
import cake6 from '../assets/cake6.jpg'

import cake7 from '../assets/cake7.jpg'
import cake8 from '../assets/cake8.jpg'
import cake9 from '../assets/cake9.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topRated: [
      {id: 1, name: 'Cake1', price: 100, url: cake1, desc: "Tasty", rate: 4.1},
      {id: 2, name: 'Cake2', price: 150, url: cake2, desc: "Tasty", rate: 4.1},
      {id: 3, name: 'Cake3', price: 200, url: cake3, desc: "Tasty", rate: 4.1}
    ],
    allCategories: [
      {id: 4, name: 'Cake4', price: 100, url: cake4, desc: "Tasty", rate: 4.1},
      {id: 5, name: 'Cake5', price: 150, url: cake5, desc: "Tasty", rate: 4.1},
      {id: 6, name: 'Cake6', price: 200, url: cake6, desc: "Tasty", rate: 4.1}
    ],
    dishesNearYou: [
      {id: 7, name: 'Cake7', price: 100, url: cake7, desc: "Tasty", rate: 4.1},
      {id: 8, name: 'Cake8', price: 150, url: cake8, desc: "Tasty", rate: 4.1},
      {id: 9, name: 'Cake9', price: 200, url: cake9, desc: "Tasty", rate: 4.1}
    ],
    
    cartItemCount: 0,
    cartItems: []
  },
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1}
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some(i => i.id === item.id)
        if(bool) {
          let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
          state.cartItems[itemIndex]["quantity"] +=1;
        } else {
          state.cartItems.push(item)
        }
      } else {
        state.cartItems.push(item)
      }
        state.cartItemCount++
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some(i => i.id === payload.id)
        if (bool) {
          let index = state.cartItems.findIndex(el => el.id === payload.id)
          if (state.cartItems[index]["quantity"] !==0) {
              state.cartItems[index]["quantity"] -= 1
              state.cartItemCount--
          }
          if (state.cartItems[index]["quantity"] === 0) {
              state.cartItems.splice[index, 1]
          }
        }
      }
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload)
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload)
    },
  },
  modules: {
  }
})
