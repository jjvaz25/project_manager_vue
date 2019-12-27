<template >
  <v-app>
    <nav-bar />
    <v-content class="mx-4 mb-4 grey lighten-4"> 
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
 
export default {
  name: 'App',
  components: {
    'nav-bar': NavBar   
  },

  data: () => ({
    //
  }),
};
</script>
