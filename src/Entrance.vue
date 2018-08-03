<template>
  <v-app>
    <v-content>
      <v-container
        :style="`background-color: ${$COLOR.primary};`"
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

<script src="./Entrance.js">
</script>
