import Vue from 'vue'
import Vuex from 'vuex'

import cake1 from '../assets/cakes/cake1.jpg'
import cake2 from '../assets/cakes/cake2.jpg'
import c3 from '../assets/cakes/c3.jpg'
import c4 from '../assets/cakes/c4.jpg'
import c5 from '../assets/cakes/c5.jpg'
import c6 from '../assets/cakes/c6.jpg'

import cake4 from '../assets/cake4.jpg'
import cake5 from '../assets/cake5.jpg'
import cake6 from '../assets/cake6.jpg'

import cake7 from '../assets/cake7.jpg'
import cake8 from '../assets/cake8.jpg'
import cake9 from '../assets/cake9.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cakes: [
      {id: 1, name: 'Chocolate cake', price: 100, url: cake1, desc: "Tasty", rate: 4.1},
      {id: 2, name: 'Bubblegum cake', price: 150, url: cake2, desc: "Tasty", rate: 4.1},
      {id: 3, name: 'Lemon & mint cake', price: 200, url: c3, desc: "Tasty", rate: 4.1},
      {id: 4, name: 'Strawberry cake', price: 200, url: c4, desc: "Tasty", rate: 4.1},
      {id: 5, name: 'Caramel cake', price: 200, url: c5, desc: "Tasty", rate: 4.1},
      {id: 6, name: 'Orange cake', price: 200, url: c6, desc: "Tasty", rate: 4.1}
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
