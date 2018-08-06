<template>
  <div>

    <v-form
      v-model="isValid"
      class="pt-4">
      <v-text-field
        v-model="user.email"
        :rules="[$validate.required, $validate.email]"
        color="$COLOR.black"
        label="Email"/>

      <v-btn
        :disabled="!isValid"
        class="white--text mt-4"
        block
        color="accent"
        @click="initiateAccountRecovery()"
      >
        Recover my account
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
        to="/sign-up"
        right>Sign up</v-btn>
    </v-layout>

  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
    },
    isValid: false,
  }),
  methods: {
    initiateAccountRecovery() {
      this.$store.dispatch('auth.recoverPasssword', this.user);
      this.$router.push('/');
    },
  },
};
</script>
