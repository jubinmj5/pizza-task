import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLoggedIn: localStorage.getItem("isLoggedIn") ?? false,
      currentUser: localStorage.getItem("currentUser") ?? null,
      auth_credentials: [
        {
          name: "Jubin MJ",
          username: "jubinmj5@gmail.com",
          password: "123",
        },
        {
          name: "Admin",
          username: "admin@gmail.com",
          password: "admin123",
        },
        {
          name: "test",
          username: "test",
          password: "test",
        },
      ],
      orderData: [
        {
          id: 100,
          customer: "Jubin Mathew",
          quantity: 3,
          total_price: 467,
          status: "Ready to Serve",
        },
        {
          id: 101,
          customer: "Sriram Kumar",
          quantity: 2,
          total_price: 300,
          status: "Order Received",
        },
        {
          id: 102,
          customer: "Sowmya C",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 103,
          customer: "Sowmya C",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 104,
          customer: "Ritika Kumar",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 105,
          customer: "Soundar Raj",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 106,
          customer: "Raj Pranav",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 107,
          customer: "Sheethal Raju",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 108,
          customer: "Sowmya C",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 109,
          customer: "Chandan",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 110,
          customer: "Pankaj Sarvjeet",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 111,
          customer: "Sasi Raj",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 112,
          customer: "Linda Eugin",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 113,
          customer: "Sandra Mary",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
        {
          id: 114,
          customer: "John Clein",
          quantity: 4,
          total_price: 606,
          status: "Order Received",
        },
      ],
      orderReceivedCount:0,
      orderPreparingCount:0,
      readytoServeCount:0,
    };
  },
  mutations: {
    validateLogin(state, user) { 
      let result = state.auth_credentials.filter(
        (x) => x.username === user.email && x.password === user.password
      );
      if (result.length) {
        state.currentUser = result[0].name;
        localStorage.setItem("currentUser", result[0].name);
        state.isLoggedIn = true;
      } else {
        alert("Credentials entered are invalid.")
      }
    },
    clearCredentials(state) {
      localStorage.clear();
      state.isLoggedIn = false;
    },
    editOrder(state, currentItem) {
      let result = state.orderData.filter((x) => x.id === currentItem.id);
      if(result.length == 1) {
        
        state.orderReceivedCount=state.orderData.filter(x=>x.status=='Order Received').length
        state.orderPreparingCount=state.orderData.filter(x=>x.status=='Order Preparing').length
        state.readytoServeCount=state.orderData.filter(x=>x.status=='Ready to Serve').length
        state.orderData=state.orderData.map(x=> {
          if(x.id == result[0].id) {
            x.status = currentItem.status
          }
          return x
        })
      }
    },
  },
  actions: {
    login({ commit }, user) {
      commit("validateLogin", user);
    },
    logout({ commit }) {
      commit("clearCredentials");
    },
    updateOrder({ commit }, currentItem) {
      commit("editOrder",currentItem);
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    currentUser(state) {
      return state.currentUser;
    },
    orderData(state) {
      return state.orderData;
    },
    orderReceivedCount(state) {
      return state.orderReceivedCount
    },
    orderPreparingCount(state) {
      return state.orderPreparingCount
    },
    readytoServeCount(state) {
      return state.readytoServeCount
    },
  },
});

export default store;
