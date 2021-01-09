<template>
  <v-app id="inspire">
    <NavDra />
    <AppBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavDra from "./components/NavDra";
import AppBar from "./components/AppBar";

export default {
  components: {
    NavDra,
    AppBar
  },
  created: () => {
    console.log(process.env);
  }
};
</script>
