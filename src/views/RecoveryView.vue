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
        label="E-mail"/>
      <v-btn
        class="white--text"
        block
        color="teal "
        @click="initiateAccountRecovery()"> Recover my account </v-btn>
    </v-form>
    <v-layout
      row
      mt-4>
      <div> Aleardy have an account
        <router-link to="/login"> Log in </router-link>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    emailRules: [(value) => !!value || 'Required.'],
  }),
  methods: {
    initiateAccountRecovery() {
      this.$store.dispatch('auth.recoverPasssword', {
        email: this.email,
      });
      this.$router.push('/');
    },
  },
};
</script>
