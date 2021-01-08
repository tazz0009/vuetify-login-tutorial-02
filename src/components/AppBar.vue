<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon v-if="!isLogin" router :to="{ name: 'login' }" exact>
      <v-icon>login</v-icon>
    </v-btn>

    <v-menu offset-y v-if="isLogin">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item router :to="{ name: 'mypage' }" exact>
          <v-list-item-title
            ><v-icon left>face</v-icon>My Page</v-list-item-title
          >
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title
            ><v-icon left>login</v-icon>Logout</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EventBus from "../plugins/EventBus";

export default {
  computed: {
    ...mapGetters("login", ["isLogin"])
  },
  methods: {
    ...mapActions("login", ["logout"]),
    changeDrawer() {
      EventBus.$emit("changeDrawer");
    }
  }
};
</script>

<style></style>
