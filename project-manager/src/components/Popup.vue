<template>
  <div class="popup text-center">
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text dark class="success" v-on="on">
          Add new project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a new project</h2>
        </v-card-title>

      </v-card>


    </v-dialog>
  </div>
</template>

<script>
export default {
  
}
</script>
