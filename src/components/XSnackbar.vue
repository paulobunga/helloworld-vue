<template>
  <v-snackbar
    v-model="$data.visible"
    :timeout="$data.options.timeout || $props.timeout"
    :absolute="$data.options.absolute || $props.absolute"
    :top="$data.options.top || $props.top"
    :bottom="$data.options.bottom || $props.bottom"
    :right="$data.options.right || $props.right"
    :left="$data.options.left || $props.left"
    :color="$data.options.color || $props.color"
    :vertical="$data.options.vertical || $props.vertical"
    :multi-line="$data.options.multiLine || $props.multiLine"
  >
    {{ content }}
    <v-btn
      flat
      small
      style="min-width: unset;"
      @click.native="hide"
    >
      Ok
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'XSnackbar',

  props: {
    absolute: Boolean,
    bottom: Boolean,
    left: Boolean,
    multiLine: Boolean,
    right: Boolean,
    top: Boolean,
    timeout: Number,
    vertical: Boolean,
    color: String,
  },

  data: () => ({
    content: '',
    options: {},
    visible: false,
  }),

  methods: {
    show(content, options = {}) {
      this.$data.content = content;
      this.$data.options = options;
      if (this.$data.options.color === 'failure') {
        this.$data.options.color = 'red darken-2';
      }
      if (this.$data.options.color === 'success') {
        this.$data.options.color = 'green darken-2';
      }
      this.$data.visible = true;
    },

    hide() {
      this.$data.visible = false;
    },
  },
};
</script>
