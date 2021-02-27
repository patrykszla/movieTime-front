<template>
  <div class="registration-page-wrapper">
    <div class="registration-page-input-wrapper">
      <div class="registration-page-logo"></div>
      <h2 class="register">Zarejestruj się</h2>
      <div v-if="alert.message" :class="`alert ${alert.type}`">
        {{ alert.message }}
      </div>
       <div v-if="validError.length > 0" class="alert alert-danger">
           <ul>
               <li v-for="(item ,index) in validError" :key="index">
                   {{item["memberNames"][0]}} : {{item["errorMessage"]}}
               </li>
           </ul>
      </div>
      <form @submit.prevent="handleRegister">
        <div class="form-wrapper">
          <input
            v-model="Name"
            type="text"
            id="Name"
            name="Name"
            class="input"
            placeholder="Imie"
          />
          <input
            v-model="Surname"
            type="text"
            id="Surname"
            name="Surname"
            class="input"
            placeholder="Nazwisko"
          />
          <input
            v-model="Email"
            type="email"
            id="Email"
            name="Email"
            class="input"
            placeholder="E-mail"
          />

          <input
            v-model="Login"
            type="text"
            id="Login"
            name="Login"
            class="input"
            placeholder="Login"
          />
          <input
            v-model="Password"
            type="text"
            id="Password"
            name="Password"
            class="input"
            placeholder="Hasło"
          />
          <input
            v-model="repeatPassword"
            type="text"
            id="registration-repeat-password"
            class="input"
            placeholder="Powtórz hasło"
          />
          <button type="submit" id="submit" class="btn submit">
            Zarejestruj się
          </button>
          <span class="spacer">lub</span>
          <router-link to="/login" class="btn"> Zaloguj się </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      Name: null,
      Surname: null,
      Email: null,
      Login: null,
      Password: null,
      repeatPassword: null,
      validError: []
    };
  },
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
    handleRegister() {
      const { dispatch } = this.$store;
      if (this.Password != this.repeatPassword) {
        dispatch("alert/error", "Hasła nie są takie same.", { root: true });
      }
      const { Name, Surname, Email, Login, Password } = this;

     var register = dispatch("authentication/register", {
        Name,
        Surname,
        Email,
        Login,
        Password,
      })
      
      register.then(err=>{
          if(err){
              this.validError = err;
          }

      })
    },
  },
};
</script>
<style lang="scss">
.registration-page-wrapper {
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("../assets/slider-bg.png");
  background-repeat: no-repeat;

  h2.register {
    font-size: 30px;
    margin-bottom: 15px;
    font-weight: 400;
  }
  .form-wrapper {
    display: flex;
    flex-flow: column;
    width: 100%;
  }
  .spacer {
    margin: 15px 0;
  }
  .registration-page-input-wrapper {
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
    @media (max-width: 999px) {
      padding: 20px;
    }
    .registration-page-logo {
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