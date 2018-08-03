<template>
  <v-app light>
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


<script src="./Entrance.js">
</script>
