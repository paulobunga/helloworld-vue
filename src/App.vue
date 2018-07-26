
<!-- <style src="normalize.css/normalize.css"></style> -->

<!-- <style src="vuetify/dist/vuetify.min.css"></style> -->

<style lang="stylus">
// $color-pack = false

// @require '../node_modules/vuetify/src/stylus/settings/_colors';

// $theme := {
//   primary: $blue-grey.darken-2
//   accent: $amber.base
//   secondary: $grey.darken-3
//   info: $blue.base
//   warning: $amber.base
//   error: $red.base
//   success: $green.base
// }

@require '../node_modules/vuetify/src/stylus/main';

</style>

<style src="./App.css">
</style>


<script>
// import Session from './Session.vue';
// import Entrance from './Entrance.vue';

const Session = () => import(/* webpackChunkName: "Session" */ './Session.vue');
const Entrance = () => import(/* webpackChunkName: "Entrance" */ './Entrance.vue');

export default {
  name: 'App',

  created() {
    this.$vuetify.theme.primary = '#1687A7';
    this.$vuetify.theme.accent = '#003459';
  },

  render(h) {
    return h(this.$store.state.authenticated ? Session : Entrance);
  },
};
</script>
