<template>
  <nav>
    <v-app-bar class="grey lighten-4" flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar flat class="grey lighten-4">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Spartan</span>
          <span>Mule</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" app temporary hide-overlay class="primary">
        <p>test</p>

      </v-navigation-drawer>



    </v-app-bar>
  </nav>
</template>

<script>
 
export default {
  name: 'NavBar',
  components: {
  },
  // data: () => ({
  //   drawer: true
  //   //
  // }),
  data () {
    return {
      drawer: false
    } 
  }
};
</script>
