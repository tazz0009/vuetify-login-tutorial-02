<template>
  <v-container fill-height class="d-flex justify-center">
    <div class="login">
      <v-alert type="error" v-if="isLoginError">
        이메일과 비밀번호가 일치하지 않습니다.
      </v-alert>
      <v-card outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-5">
              LOGIN
            </v-list-item-title>
            <v-text-field
              v-model="email"
              label="이메일을 입력해주세요."
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력해주세요."
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined @click="login({ email, password })" color="primary">
            Login
          </v-btn>
          <!-- <v-btn @click="test">Get</v-btn>
          <v-btn @click="postTest">Post</v-btn> -->
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import axios from "axios";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions("login", ["login"]),
    // test() {
    //   axios
    //     .get("https://reqres.in/api/users?page=2")
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //     .then(() => {
    //       // always executed
    //     });
    // },
    // postTest() {
    //   axios
    //     .post("https://reqres.in/api/register", {
    //       email: "eve.holt@reqres.in",
    //       password: "pistol",
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //     .then(() => {
    //       // always executed
    //     });
    // },
  },
  computed: {
    ...mapGetters("login", ["isLoginError"]),
  },
};
</script>
<style scoped>
.login {
  width: 370px;
}
</style>
