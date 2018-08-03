<template>
  <div class='-x-view -x-view-content'>
    <v-layout row wrap>
      <v-flex class="text-md-center">
        <img src="../assets/logo.png">
      </v-flex>
    </v-layout>
    <v-form>
      <v-text-field
          v-model="email"
          label="E-mail"
          :rules="emailRules"
        ></v-text-field>
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
        ></v-text-field>
      <v-btn
        class="white--text"
        @click="login()"
        block
        color="teal "
      >Log in</v-btn>
    </v-form>
    <div class="mt-4"> Not a member ? <router-link to="/signup"> Sign up now </router-link></div>
    <div class="mt-2">
      <router-link to="/recover"> Recover password </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      email: '',
      emailRules: [
        value => !!value || 'Required.',
        v => v === 'test@example.com' || 'Invalid email adress',
      ],
      showPassword: false,
      password: '',
      passwordRules: [
        value => !!value || 'Required.',
        v => v.length >= 4 || 'Min 4 characters',
      ],
    }),
    methods: {
      login() {
        this.$store.dispatch('auth.login', {
          username: this.email,
          password: this.password,
        });
      },
    }
  }
</script>