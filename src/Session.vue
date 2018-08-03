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
            <v-list-tile-title>Hello World</v-list-tile-title>
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
        <v-list-tile
          key="Logout"
          ripple
          @click="logout()">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log out</v-list-tile-title>
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


      <v-toolbar-title>{{ $route.path === '/home' ? 'Hello World' : $route.name }}</v-toolbar-title>

      <v-spacer/>

      <portal-target name="toolbar"/>

    </v-toolbar>

    <v-content>
       <v-container
        fluid
        fill-height
        class='-x-relative'
      >
        <transition name="fade">
          <router-view/>
        </transition>
      </v-container>
    </v-content>

  </v-app>
</template>

<script src="./Session.js">
</script>
