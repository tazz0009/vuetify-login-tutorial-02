<template>
  <v-container class="d-flex justify-center">
    <div class="login">
      <v-card outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-5">
              My Info
            </v-list-item-title>
            <v-list-item-subtitle>{{
              getUserInfo.first_name
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{
              getUserInfo.last_name
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar tile size="80" color="grey">
            <img :src="getUserInfo.avatar" :alt="getUserInfo.first_name" />
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("login", ["getUserInfo"])
  }
};
</script>

<style>
.login {
  width: 370px;
}
</style>
