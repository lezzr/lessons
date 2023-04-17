<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn to="/dashboard">Dashboard</v-btn>
    <v-btn to="/about">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
