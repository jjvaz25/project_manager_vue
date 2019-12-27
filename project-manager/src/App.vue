<template >
  <v-app class>
    <v-content class="grey lighten-4">
      <nav-bar /> 
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
