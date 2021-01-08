<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-group>
          <v-list-item router :to="{ name: 'home' }" exact>
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="!isLogin" router :to="{ name: 'login' }" exact>
            <v-list-item-icon>
              <v-icon>contact_mail</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else router :to="{ name: 'mypage' }" exact>
            <v-list-item-icon>
              <v-icon>contact_mail</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>MyPage</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EventBus from "../plugins/EventBus";
export default {
  data: () => ({ drawer: null }),
  created() {
    EventBus.$on("changeDrawer", () => {
      this.drawer = !this.drawer;
    });
  },
  computed: {
    ...mapGetters("login", ["isLogin"])
  }
};
</script>

<style></style>
