<template>
  <div class="login-page-wrapper">
    <div class="login-page-input-wrapper">
      <div class="login-page-logo"></div>
      <h2 class="login">Zaloguj się</h2>
      <div v-if="alert.message" :class="`alert ${alert.type}`">
        {{ alert.message }}
      </div>
      <form @submit.prevent="handleLogin">
        <div class="form-wrapper">
          <input
            required
            v-model="Login"
            type="text"
            id="Login"
            name="Login"
            class="input"
            placeholder="Login"
          />
          <input
            required
            v-model="Password"
            name="Password"
            type="text"
            id="Password"
            class="input"
            placeholder="Hasło"
          />
          <button type="submit" id="submit" class="btn submit">
            Zaloguj się
          </button>
          <span class="spacer">lub</span>
          <router-link to="/registration" class="btn"> Zarejestruj się </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  computed: {
    alert() {
      return this.$store.state.alert;
    },
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("alert/clear");
    },
  },
  methods: {
    handleLogin(e) {
      const { Login, Password } = this;
      const { dispatch } = this.$store;
      if (Login && Password) {
        dispatch("authentication/login", { Login, Password });
      }
    },
  },
  data() {
    return {
      Login: null,
      Password: null,
    };
  },
};
</script>
<style lang="scss" scoped>
.login-page-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("../assets/slider-bg.png");
  background-repeat: no-repeat;

  h2.login {
    font-size: 30px;
    margin-bottom: 15px;
    font-weight: 400;
  }
  .form-wrapper {
    display: flex;
    flex-flow: column;
    width: 100%;
  }
  .spacer{
    margin: 15px 0;
  }
  .login-page-input-wrapper {
    width: calc(100% - 100px);
    max-width: 400px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin: auto;
    background-color: #ffffff;
    padding: 30px;
    @media (max-width: 999px){
      padding: 20px;
    }

    .login-page-logo {
      background-image: url("../assets/movie-logo2.png");
      margin: auto;
      width: 150px;
      height: 110px;
      background-position: top;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .form-wrapper {
      display: flex;
      flex-flow: column;
    }
    .submit {
      width: 100%;
    }
  }
}
</style>