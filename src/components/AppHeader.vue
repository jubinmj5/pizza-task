<template>
    <v-card class="mx-auto" style="z-index: 9999;" color="grey-lighten-3" max-width="448">
      <v-layout>
        <v-app-bar
          color="primary"
        >
          <template v-slot:image>
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>
  
          <v-app-bar-title>Pizza Task</v-app-bar-title>
  
          <v-spacer></v-spacer>
  
          <v-btn prepend-icon="mdi-account" density="compact" variant="outlined">
            {{ appUser }}
          </v-btn>&nbsp;

          <v-btn icon  @click="logout">
            <v-icon title="Logout">mdi-logout</v-icon>
          </v-btn>
        </v-app-bar>
  
        <!-- <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="n in 4"
                :key="n"
                cols="12"
              >
                <v-card
                  :subtitle="`Subtitle for Content ${n}`"
                  :title="`Content ${n}`"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                ></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main> -->
      </v-layout>
    </v-card>
  </template>
  <script>
  export default {
    data() {
        return {

        }
    },
    computed: {
        appUser() {
            return this.$store.getters.currentUser
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

  } 
  </script>