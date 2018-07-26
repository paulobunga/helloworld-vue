
<template>
  <div>
    <div class="star-rating">
      <v-icon class="star-color">{{ ratings[0] }}</v-icon>
      <v-icon class="star-color">{{ ratings[1] }}</v-icon>
      <v-icon class="star-color">{{ ratings[2] }}</v-icon>
      <v-icon class="star-color">{{ ratings[3] }}</v-icon>
      <v-icon class="star-color">{{ ratings[4] }}</v-icon>
    </div>
  </div>
</template>

<style scoped>
.star-color {
  color: #ffd700 !important;
}
</style>

<script>
export default {
  name: 'StarRating',

  props: {
    value: {
      type: Number,
      required: true,
    },
  },

  computed: {
    ratings() {
      let stars = [1, 2, 3, 4, 5];
      const value = Math.round(this.$props.value * 2) / 2;
      stars = stars.map((star) => {
        if (star <= value) {
          return 'star';
        }
        if (star - value >= 0.5 && star - value < 1) {
          return 'star_half';
        }
        return 'star_border';
      });
      return stars;
    },
  },
};
</script>
