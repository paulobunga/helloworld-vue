<template>
  <div class="-x-view -x-view-content">
    <img src="../assets/logo.png">
    <h2>Welcome {{this.$store.state.user.name }}<h2/>
  </h2></div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>
