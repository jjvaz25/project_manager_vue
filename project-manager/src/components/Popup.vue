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
          <v-form px-3 ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

            <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
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
import db from '../fb'

export default {
  data() {
    return {
      title: '',
      content: '',
      menu2: false,
      date: new Date().toISOString().substr(0,10),
      inputRules: [
         v=> (v.length && v.length >= 2) || 'Input must be greater than one character' 
      ],
      dateRules: [
        v => (v.length && v.length >=1) || 'The date field is required'
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          date: this.date,
          person: 'Jeff',
          status: 'ongoing'
        }

        db.collection('projects').add(project).then(() => {
          console.log('added to database')
        })
      }
    }
  }
  
}
</script>
