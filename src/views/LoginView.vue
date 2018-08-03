<template>
  <div class="-x-view -x-view-content">

    <v-layout
      row
      wrap>
      <v-flex class="text-md-center">
        <img src="../assets/logo.png">
      </v-flex>
    </v-layout>

    <v-form>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
      />
      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'visibility_off' : 'visibility'"
        :rules="passwordRules"
        :type="showPassword ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 4 characters"
        counter
        @click:append="showPassword = !showPassword"
      />

      <v-btn
        class="white--text"
        block
        color="accent"
        @click="login()"
      >
        Log in
      </v-btn>
    </v-form>

    <div>
      <v-btn
        class="white--text"
        flat
        to="/sign-up">Sign up</v-btn>

      <div d-flex />
      <v-btn
        class="white--text"
        flat
        to="/recover"
        right>Recover</v-btn>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    emailRules: [(value) => !!value || 'Required.', (v) => v === 'test@example.com' || 'Invalid email adress'],
    showPassword: false,
    password: '',
    passwordRules: [(value) => !!value || 'Required.', (v) => v.length >= 4 || 'Min 4 characters'],
  }),
  methods: {
    login() {
      this.$store.dispatch('auth.login', {
        username: this.email,
        password: this.password,
      });
    },
  },
};
</script>
