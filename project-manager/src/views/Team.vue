<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team page</h1>

    <v-container class="my-5">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(person, index) in team" :key="index">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
               <v-avatar size="120">
                 <img :src="person.avatar">
               </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="subtitle-2 grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon left small>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'team',
  components: {

  },
  data() {
    return{
      team: [
        { name: 'Jeff', role: 'Web developer', avatar: '/jeff.JPG' },
        { name: 'Emily', role: 'Content Director', avatar: '/emily.jpeg' },
        { name: 'Zoe', role: 'Assistant Marketing Director', avatar: '/zoe.jpeg' },
        { name: 'Terry', role: 'Marketing Director', avatar: '/terry.jpeg' },
        { name: 'Benito', role: 'Production Director', avatar: '/benito.jpg' }
      ],
    }
  },
}
</script>

