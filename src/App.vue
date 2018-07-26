<template>
  <v-app light>

    <v-navigation-drawer
      id="navigationDrawer"
      v-model="$store.state.navigationDrawerVisible"
      app
      temporary
      fixed>

      <!-- <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <v-icon class="grey">person</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Anonyme</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list> -->

      <v-list class="pa-1">
        <v-list-tile
          avatar
          tag="div">
          <v-list-tile-avatar tile>
            <img
              src="./assets/logo.png"
              style="width: auto;" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Fyli</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider/>

      <v-list
        class="pt-0"
        dense>
        <v-list-tile
          v-for="item in navigationMenuItems"
          :key="item.title"
          :to="item.route"
          ripple>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <div
        class="caption"
        style="position: absolute; right: 16px; bottom: 16px;">
        Version: {{ releaseVersion }}
      </div>

    </v-navigation-drawer>

    <v-navigation-drawer
      id="detailsDrawer"
      v-model="$store.state.detailsDrawerVisible"
      app
      temporary
      fixed
      right
      touchless
      style="padding: 0;">

      <portal-target name="detailsDrawer"/>

    </v-navigation-drawer>

    <v-toolbar
      app
      fixed
      prominent>

      <v-toolbar-side-icon
        id="navigationDrawerTrigger"
        @click.stop="$store.dispatch('NavigationDrawer.show')">

        <v-progress-circular
          v-if="$store.state.processing"
          :size="20"
          :width="2"
          indeterminate/>

      </v-toolbar-side-icon>


      <v-toolbar-title>{{ $route.path === '/home' ? 'Fyli' : $route.name }}</v-toolbar-title>

      <v-spacer/>

      <portal-target name="toolbar"/>

      <!--<v-menu bottom right>
        <v-btn icon slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile href="tel:70242424">
            <v-list-tile-action>
              <v-icon>headset_mic</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Appeler un opérateur</v-list-tile-title>
          </v-list-tile>
          <portal-target name="toolbar-more"></portal-target>
        </v-list>
      </v-menu> -->

    </v-toolbar>

    <v-content>
      <v-container
        fluid
        fill-height
        class="-x-relative">
        <transition name="fade">
          <router-view/>
        </transition>
      </v-container>
    </v-content>

  </v-app>
</template>

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

<script src="./App.js">
</script>
