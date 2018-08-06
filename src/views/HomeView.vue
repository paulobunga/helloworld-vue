<template>
  <div class="-x-view -x-view-content">
    <h2>{{ this.todo }}<h2/>

      <v-form>
        <v-container>
          <v-layout
            row
            wrap>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Regular"
              />
            </v-flex>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Regular"
                placeholder="Placeholder"
              />
            </v-flex>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Solo"
                solo
              />
            </v-flex>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Solo"
                placeholder="Placeholder"
                solo
              />
            </v-flex>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Box"
                box
              />
            </v-flex>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Box"
                placeholder="Placeholder"
                box
              />
            </v-flex>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Outline"
                outline
              />
            </v-flex>

            <v-flex
              xs12
              sm6
              md3>
              <v-text-field
                label="Outline"
                placeholder="Placeholder"
                outline
              />
            </v-flex>

          </v-layout>
        </v-container>
      </v-form>

  </h2></div>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    todo: 'this is a boilerplate...',
  }),
};
</script>
