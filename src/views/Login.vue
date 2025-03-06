<template>
  <v-container class="fill-height pa-0 bg-primary h-screen" fluid>
    <v-row class="justify-center align-center">
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
        class="d-flex justify-center align-center"
      >
        <v-card class="pa-4" outlined>
          <template v-slot:title>
            <h1 class="text-center font-weight-bold">Welcome to Pizza Task</h1>
            <h3 class="text-center text-primary font-weight-bold">
              Login to your Account
            </h3>
          </template>

          <!-- Form for login -->
          <v-form class="pt-4" @submit.prevent="handleLogin">
            <v-text-field
              label="Email"
              v-model="email"
              type="email"
              required
              variant="outlined"
              density="compact"
            />
            <v-text-field
              label="Password"
              v-model="password"
              :type="passwordVisible ? 'text' : 'password'"
              required
              variant="outlined"
              density="compact"
              append-inner-icon="mdi-eye"
              @click:append-inner="passwordVisible = !passwordVisible"
            />
            <v-btn type="submit" block color="primary">Login</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: "",
      password: "",
      passwordVisible: false,
    };
  },
  methods: {
    handleLogin() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", user)
        .then(() => {
          if(this.$store.getters.isLoggedIn) {
            localStorage.setItem('isLoggedIn',this.$store.getters.isLoggedIn)
          // console.log("User logged in:", this.$store.getters.currentUser);
          this.$router.push('/'); // Redirect to home page
        
          }
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Ensure the page content fills the entire height of the screen */
html,
body,
#app {
  height: 100%;
  margin: 0;
}

/* Optionally, add a light background to the body or container */
body {
  background-color: #f5f5f5;
}
</style>
