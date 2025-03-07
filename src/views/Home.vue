<template>
    <div class="px-12">
      <v-row>
        <v-col cols="12">
          <AppHeader/>
        </v-col>
        <v-col cols="12">
          <OverviewCards/>
        </v-col>
        <v-col cols="12">
          <OrderList/>
        </v-col>
      </v-row>
      
      
      
    </div>
  </template>
  
  <script>
  import AppHeader from "./../components/AppHeader.vue"
  import OrderList from "./../components/OrdersList.vue"
  import OverviewCards from "./../components/OverviewCards.vue"
  export default {
    name: 'Home',
    components: {
      AppHeader: AppHeader,
      OrderList: OrderList,
      OverviewCards: OverviewCards,
    },
    data() {
      return {
        
      }
    },
    computed: {
      appLogin() {
        return this.$store.getters.isLoggedIn
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    }
  };
  </script>
  