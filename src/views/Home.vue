<template>
    <div>
      <h1>Dashboard- {{ appLogin }}</h1>
      <v-container class="bg-red m-4 border">
        <v-row class="fill-height">
        <v-col class="">

            <v-sheet class="pa-2 ma-2">
            <v-btn @click="logout" class="warning">Logout</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        name:  null
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
  