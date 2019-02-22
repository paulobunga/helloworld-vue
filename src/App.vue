<!-- <style src="normalize.css/normalize.css"></style> -->

<!-- <style src="vuetify/dist/vuetify.min.css"></style> -->

<style lang="stylus">
$color-pack = false
@require '../node_modules/vuetify/src/stylus/main';
</style>

<style src="./App.css"></style>

<script>
import { mapState } from 'vuex';

// import Session from './Session/Session.vue';
// import Entrance from './Entrance/Entrance.vue';

const Session = () => import(/* webpackChunkName: "Session" */ './Session/Session.vue');
const Entrance = () => import(/* webpackChunkName: "Entrance" */ './Entrance/Entrance.vue');

export default {
  name: 'App',

  computed: mapState({
    ready(state) {
      return state.Shared.ready;
    },
    initialized(state) {
      return state.Shared.initialized;
    },
    authenticated(state) {
      return state.Auth.authenticated;
    },
  }),

  render(h) {
    const { ready, initialized, authenticated } = this;

    if (!ready || (authenticated && !initialized)) {
      return;
      // return LandingView; // @TODO add landing view
    }

    return h(this.$store.state.Auth.authenticated ? Session : Entrance);
  },
};
</script>
