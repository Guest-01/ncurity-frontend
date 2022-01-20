import Vue from 'vue'
import Vuex from 'vuex'
import accounts from '../assets/account.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('user state changed:', state.user);
    },
  },
  actions: {
    login(context, { id, password }) {
      console.log('login action start');
      for (const account of accounts) {
        if (account.id === id && account.pw === password) {
          console.log('login success');
          context.commit('setUser', account);
          sessionStorage.setItem('user', JSON.stringify(account));
          return;
        }
      }
      throw new Error('id/pw invalid');
    },
    logout(context) {
      console.log('logout action start');
      context.commit('setUser', null);
      sessionStorage.clear();
      return;
    }
  },
  modules: {
  }
})


// 새로고침이나 주소직접 입력시에도 세션을 유지하기위해 세션스토리지 사용
function initUser() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  console.log('세션스토리지:', user);
  if (user) {
    store.commit('setUser', user);
  }
}

initUser();

export default store;