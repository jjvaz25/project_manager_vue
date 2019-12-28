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

      <!-- Alternative dropdown menu option -->
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text color="grey" v-on="on">
                <v-icon left>expand_more</v-icon>
                <span>Menu (alternative)</span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-title>{{ link.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>


        <v-btn text color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" app temporary hide-overlay class="primary">
        <v-row>
          <v-col align="center" class="mt-5">
            <v-avatar size="100">
              <img src="/jeff.JPG" alt="">
            </v-avatar>
            <p class="white--text subtitle-1 mt-1">
              Web Developer
            </p>
          </v-col>
          <v-col class="mt-3 mb-4">
            <popup />
          </v-col>
        </v-row>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>



    </v-app-bar>
  </nav>
</template>

<script>
import Popup from './Popup'
 
export default {
  name: 'NavBar',
  components: {
    'popup': Popup
  },
  // data: () => ({
  //   drawer: true
  //   //
  // }),
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ],
    } 
  }
};
</script>
