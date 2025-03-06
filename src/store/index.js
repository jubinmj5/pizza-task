import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: localStorage.getItem('isLoggedIn')?? false,
      auth_credentials: [
        {
          username: "jubinmj5@gmail.com",
          password: "123",
        },
        {
          username: "sowmya@gmail.com",
          password: "sowmya123",
        },
        {
          username: "test",
          password: "test",
        },
      ],
    };
  },
  mutations: {
    validateLogin(state, user) {
      console.log("user=", user);
      let result = state.auth_credentials.filter(
        (x) => x.username === user.email && x.password === user.password
      );
      if (result.length){
        state.isLoggedIn = true;
      }
    },
    clearCredentials(state) {
        localStorage.removeItem('isLoggedIn')
        state.isLoggedIn=false
    }
  },
  actions: {
    login({ commit }, user) {
      commit("validateLogin", user);
    },
    logout({commit}) {
        commit('clearCredentials')
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
