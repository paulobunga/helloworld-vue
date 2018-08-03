<template>
  <div class='-x-view -x-view-content'>
    <v-layout row wrap>
      <v-flex class="text-md-center">
        <img src="../assets/logo.png">
      </v-flex>
    </v-layout>
    <v-form>
      <v-text-field v-model="email" label="E-mail" :rules="emailRules"></v-text-field>
      <v-btn class="white--text" @click="recoverPassword()" block color="teal "> Recover my account </v-btn>
    </v-form>
    <v-layout row mt-4>
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
      emailRules: [
        value => !!value || 'Required.',
      ],
    }),
    methods: {
      recoverPassword() {
        this.$store.dispatch('auth.recoverPasssword', {
          email: this.email,
        });
        this.$router.push('/');
      },
    }
  }
</script>