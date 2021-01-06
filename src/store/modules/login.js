import router from "../../router/index";
import axios from "axios";

const state = () => ({
  allUsers: [
    {
      id: 1,
      name: "test01",
      email: "test01@test.com",
      password: "1234qwer",
    },
    {
      id: 2,
      name: "test02",
      email: "test02@test.com",
      password: "1234qwer",
    },
  ],
  userInfo: null,
  isLogin: false,
  isLoginError: false,
});

// getters
const getters = {
  isLoginError(state) {
    return state.isLoginError;
  },
  isLogin(state) {
    return state.isLogin;
  },
  getUserInfo(state) {
    return state.userInfo;
  },
};

// actions
const actions = {
  // 로그인 시도
  login({ commit, dispatch }, paylord) {
    // const { email, password } = paylord;
    axios
      .post("https://reqres.in/api/login", paylord)
      .then((res) => {
        console.log(res);
        let token = res.data.token;
        // 토큰을 로컬스토리지에 저장
        localStorage.setItem("access_token", token);
        dispatch("getMemberInfo");
      })
      .catch((err) => {
        console.log(err);
        commit("loginError");
      })
      .then(() => {
        // always executed
      });
  },
  logout({ commit }) {
    commit("logout");
    if (router.history.current.path !== "/") {
      router.push({ name: "home" });
    } else {
      router.go({ name: "home" });
    }
  },
  getMemberInfo({ commit }) {
    const token = localStorage.getItem("access_token");
    if (token !== "") {
      let config = {
        headers: {
          access_tocken: token,
        },
      };
      axios
        .get("https://reqres.in/api/users/2", config)
        .then((response) => {
          let userInfo = {
            id: response.data.data.id,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar,
          };
          commit("loginSuccess", userInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};

// mutations
const mutations = {
  // 로그인 성공 시
  loginSuccess(state, paylord) {
    state.isLogin = true;
    state.isLoginError = false;
    state.userInfo = paylord;
    router.push({ name: "mypage" });
  },
  // 로그인 실패 시
  loginError(state) {
    state.isLogin = false;
    state.isLoginError = true;
  },
  logout(state) {
    state.isLogin = null;
    state.isLoginError = null;
    state.userInfo = null;
    localStorage.setItem("access_token", "");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
