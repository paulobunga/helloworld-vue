<template>
  <div>

    <h2>Use this view to develop/test components</h2>

    <div
      v-for="value in valueSet1"
      :key="value">
      {{ value }} <star-rating :value="value"/>
    </div>
    <hr>
    <div
      v-for="value in valueSet2"
      :key="value">
      {{ value }} <star-rating :value="value"/>
    </div>

  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Sample',

  data: () => ({
    valueSet1: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    valueSet2: [2.22, 2.33, 2.66, 2.88],
  }),
};
</script>
