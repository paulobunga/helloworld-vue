<template>
  <div>

    <v-form
      v-model="isValid"
      class="pt-4">
      <v-text-field
        v-model="user.name"
        :rules="[$validate.required]"
        color="$COLOR.black"
        label="Name"
      />

      <v-text-field
        :rules="[$validate.required, $validate.email]"
        color="$COLOR.black"
        label="Email"
      />

      <v-text-field
        v-model="user.password"
        :append-icon="showPassword ? 'visibility_off' : 'visibility'"
        :rules="[$validate.required, $validate.password]"
        :type="showPassword ? 'text' : 'password'"
        color="$COLOR.black"
        label="Password"
        autocomplete="current-password"
        @click:append="showPassword = !showPassword"
      />

      <v-btn
        :disabled="!isValid"
        class="white--text mt-4"
        block
        color="accent"
        @click="signup()"
      >
        Sign up
      </v-btn>
    </v-form>

    <v-layout
      class="mt-2"
      justify-space-between
      row>
      <v-btn
        class="white--text text-xs-right"
        right
        flat
        to="/login">Log in</v-btn>

      <v-btn
        class="white--text text-xs-left"
        left
        flat
        to="/recover"
        right>Recover</v-btn>
    </v-layout>

  </div>

</template>

<script>
export default {
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
    },
    isValid: false,
    showPassword: false,
  }),
  methods: {
    signup() {
      this.$store.dispatch('auth.signup', this.user);
    },
  },
};
</script>
