<template>
  <v-app light>

    <v-toolbar
      app
      fixed
      prominent>


      <v-toolbar-title>{{ $route.path === '/login' ? 'Hello World' : $route.name }}</v-toolbar-title>

      <v-spacer/>

      <portal-target name="toolbar"/>

      <v-progress-circular
        v-if="$store.state.processing"
        :size="20"
        :width="2"
        indeterminate/>

    </v-toolbar>

    <v-content>
      <v-container>
        <transition name="fade">
          <router-view/>
        </transition>
      </v-container>
    </v-content>

  </v-app>
</template>


<script src="./Entrance.js">
</script>
