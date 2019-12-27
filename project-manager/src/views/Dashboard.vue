<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-row class="mb-3">

        <v-btn text small color="grey" @click="sortBy('title')">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">by project name</span>
        </v-btn>

        <v-btn text small color="grey" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">by person</span>
        </v-btn>
      </v-row>

      <v-card v-for="(project, index) in projects" :key="index" flat>
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" xs="12" md="6">
            <div class="caption grey--text">Project Title</div>   
            <div>{{ project.title }}</div>          
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>

           <v-col cols="12" xs="2" sm="4" md="2">
            <div align="center">
              <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'dashboard',
  components: {
  },
  data() {
    return {
      projects: [
        { title: 'Create project portfolio', person: 'Jeff', due: '1st Jan 2020', status: 'ongoing', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.' },
        { title: 'Update resume', person: 'Stacy', due: '5th Jan 2020', status: 'complete', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.'},
        { title: 'Search for a job', person: 'Emily', due: '10th March 2020', status: 'ongoing', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.' },
        { title: 'Devise gameplan for returning home', person: 'Jeff', due: '10th Dec 2019', status: 'overdue', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.'  },
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
}
</script>

<style>

.project.complete {
  border-left: 4px solid #3cd1c2
}

.project.ongoing {
  border-left: 4px solid orange
}

.project.overdue {
  border-left: 4px solid tomato
}

.v-chip.complete {
  background: #3cd1c2
}

.v-chip.ongoing {
    background: orange
}

.v-chip.overdue {
    background: tomato
}

</style>
