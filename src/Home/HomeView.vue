<template>
  <v-layout
    column
    class="-x-view -x-view-content"
    fill-height
  >
    <v-layout
      v-if="$store.state.Activity.processing"
      justify-center
      align-center
      column
      fill-height
    >
      <v-progress-circular
        :size="50"
        :width="2"
        color="secondary"
        indeterminate
      />
      <h2 class="mt-4 text-primary text-uppercase fw-100">
        Loading
      </h2>
    </v-layout>

    <v-layout
      v-if="!$store.state.Activity.processing && this.$data.tasks && !this.$data.tasks.length"
      justify-center
      align-center
      column
      fill-height
    >
      <h2 class="mt-4 text-primary fw-100">
        No data was provided.
      </h2>

      <v-btn
        outline
        i-flat
        color="primary"
        class="mt-2"
        @click="fetchTaskSet()"
      >
        <span class="mr-2">
          Re-load
        </span>
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-layout>

    <div v-if="!$store.state.Activity.processing && this.$data.tasks && this.$data.tasks.length">
      <v-card
        v-for="task in tasks"
        :key="task.id"
        class="mb-2"
      >
        <v-card-title>
          <v-checkbox
            v-model="task.done"
            :label="task.title"
            :value="task.done"
            color="primary"
          />
          <v-spacer />
          <v-btn icon>
            <v-icon
              color="error"
              @click="removeTask(task)"
            >
              delete
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon
              color="primary"
              @click="editTask(task)"
            >
              edit
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </div>

    <v-btn
      fab
      class="fab-bottom"
      color="accent"
    >
      <v-icon dark>
        add
      </v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    tasks: null,
  }),
  mounted() {
    this.fetchTaskSet();
  },
  methods: {
    fetchTaskSet() {
      this.$store
        .dispatch('Home/task.fetch')
        .then((response) => {
          this.$data.tasks = response;
          // this.$data.tasks = [];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editTask(task) {
      alert('editing...');
    },

    removeTask(task) {
      const { tasks } = this.$data;
      tasks.splice(tasks.indexOf(task), 1);

      // this.$store
      //   .dispatch('Home/task.remove', task.id)
      //   .then((response) => {
      //     const tasks = this.$data.tasks;
      //     tasks.splice(tasks.indexOf(task), 1);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
</script>
