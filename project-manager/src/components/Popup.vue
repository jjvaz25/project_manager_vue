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
        <v-card-text>
          <v-form px-3>
            <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

            <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y>
              <template v-slot:activator="{ on }">
                <v-text-field readonly v-model="date" label="Due date" prepend-icon="event" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>

            <v-btn @click="submit" text class="success mx-0 mt-3">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      menu2: false,
      date: new Date().toISOString().substr(0,10)
    }
  },
  methods: {
    submit() {
      console.log(this.title, this.content, this.date)
    }
  }
  
}
</script>
