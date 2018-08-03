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
        v-model="name"
        :rules="nameRules"
        label="Name"
      />
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
        color="teal "
        @click="signup()"
      > SignUp </v-btn>
    </v-form>
    <v-layout
      row
      mt-4>
      <div> Aleardy have an account <router-link to="/login"> Log in </router-link></div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    nameRules: [(v) => !!v || 'name is required'],
    email: '',
    emailRules: [(value) => !!value || 'Required.', (v) => v === 'test@example.com' || 'Invalid email adress'],
    showPassword: false,
    password: '',
    passwordRules: [(value) => !!value || 'Required.', (v) => v.length >= 4 || 'Min 4 characters'],
  }),
  methods: {
    signup() {
      this.$store.dispatch('auth.signup', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
