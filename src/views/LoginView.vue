<template>
  <div class="-x-view -x-view-content">
    <h2>LoginView</h2>
    <v-btn @click="login()">Log in</v-btn>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  methods: {
    login() {
      this.$store.dispatch('auth.login', {
        username: 'username',
        password: 'password',
      });
    },
  },
};
</script>
