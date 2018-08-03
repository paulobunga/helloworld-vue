
<!-- <style src="normalize.css/normalize.css"></style> -->

<!-- <style src="vuetify/dist/vuetify.min.css"></style> -->

<style lang="stylus">
  $color-pack = false
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

  render(h) {
    return h(this.$store.state.authenticated ? Session : Entrance);
  },
};
</script>
