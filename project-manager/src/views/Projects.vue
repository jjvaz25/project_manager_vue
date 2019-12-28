<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects page</h1>

    <v-container class="my-5">
      
      <v-expansion-panels>
        <v-expansion-panel v-for="(project, index) in myProjects" :key="index">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">Due by {{project.due}}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'projects',
  components: {

  },
  data() {
    return {
      projects: [
        { title: 'Create project portfolio', person: 'Jeff', due: '1st Jan 2020', status: 'ongoing', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.' },
        { title: 'Update resume', person: 'Zoe', due: '5th Jan 2020', status: 'complete', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.'},
        { title: 'Search for a job', person: 'Emily', due: '10th March 2020', status: 'ongoing', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.' },
        { title: 'Devise gameplan for returning home', person: 'Jeff', due: '10th Dec 2019', status: 'overdue', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga provident sit ad, magnam praesentium quia corporis adipisci ullam asperiores? Aliquid consectetur, debitis ex quidem accusantium facilis sint perferendis magnam.'  },
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Jeff'
      })
    }
  }

}
</script>
