<template>
  <div class="auth-view">
    <v-form class="pt-4">
      <v-text-field
        v-model="$data.username"
        outline
        color="white"
        placeholder="Email"
      />

      <v-text-field
        v-model="$data.password"
        outline
        color="white"
        placeholder="Password"
        autocomplete="current-password"
      />

      <v-btn
        :loading="$store.state.Activity.processing"
        :disabled="!username || !password"
        class="white--text mt-2"
        block
        color="accent"
        @click="login()"
      >
        Log in
      </v-btn>
    </v-form>

    <v-layout
      class="mt-2"
      justify-space-between
      row
    >
      <v-btn
        class="white--text"
        right
        flat
        to="/sign-up"
      >
        Sign up
      </v-btn>

      <v-btn
        class="white--text"
        left
        flat
        to="/recover"
        right
      >
        Recover
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    login() {
      this.$store.dispatch('Auth/login', {
        username: this.$data.username,
        password: this.$data.password,
      });
    },
  },
};
</script>
