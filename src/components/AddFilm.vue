<template>
  <div class="add-films-main-wrapper">
    <div v-if="alert.message" :class="`alert ${alert.type}`">
      {{ alert.message }}
    </div>
    <div v-if="validError.length > 0" class="alert alert-danger">
      <ul>
        <li v-for="(item, index) in validError" :key="index">
          {{ item["memberNames"][0] }} : {{ item["errorMessage"] }}
        </li>
      </ul>
    </div>
    <form @submit.prevent="handleNewMovie">
      <div class="add-films-wrapper">
        <input
          v-model="Title"
          type="text"
          id="Title"
          name="Title"
          class="input"
          placeholder="Tytuł"
        />
        <input
          v-model="Year"
          type="text"
          id="Year"
          name="Year"
          class="input"
          placeholder="Rok"
        />

        <input
          v-model="Description"
          type="text"
          id="Description"
          name="Description"
          class="input input-description"
          placeholder="Opis"
        />

        <div class="select-creators-wrapper">
          <select
            v-model="Genres"
            style="color: 2c3e50"
            name="Genres"
            id="types"
            class="select"
          >
            <option style="color: 2c3e50" disabled selected>Dodaj typ</option>
            <option
              style="color: 2c3e50"
              v-for="option in options"
              :key="option"
            >
              {{ option }}
            </option>
          </select>
          <input
            v-model="Creators"
            type="text"
            id="Creators"
            name="Creators"
            class="input"
            placeholder="Twórcy"
          />
        </div>

        <input
          v-model="BigPhoto"
          type="text"
          id="BigPhoto"
          name="BigPhoto"
          class="input"
          placeholder="Dodaj główny baner"
        />
        <input
          v-model="MainPhoto"
          type="text"
          id="MainPhoto"
          name="MainPhoto"
          class="input"
          placeholder="Dodaj miniaturkę"
        />

        <button type="submit" id="submit" class="btn submit">Dodaj</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddFilm",
  methods: {
    handleNewMovie() {
      const { dispatch } = this.$store;

      const {
        Title,
        Description,
        BigPhoto,
        MainPhoto,
      } = this;

    const GenresEnd = this.GenresEnd;
    const CreatorsEnd = this.CreatorsEnd;
    const Year = parseInt(this.Year);

      let addMovie = dispatch("movie/createMovie", {
        Title,
        Description,
        Year,
        BigPhoto,
        MainPhoto,
        CreatorsEnd,
        GenresEnd
      });

      addMovie.then((err) => {
        if (err) {
          this.validError = err;
        }
      });
    },
  },

  data() {
    return {
      options: ["Dramat", "Thriller", "Fantasy", "Komedia", "Serial", "Akcja"],
      Title: null,
      Description: null,
      Year: null,
      BigPhoto: null,
      MainPhoto: null,
      Creators: null,
      Genres: null,
      GenresEnd: [],
      CreatorsEnd: [],
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
    Genres(to){
        this.GenresEnd = [to];
    },
    Creators(to){
        this.CreatorsEnd = to.split(',');
    }
  },
};
</script>
<style lang="scss" scoped>
.add-films-main-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;

  .add-films-wrapper {
    width: 100%;
    height: 100%;
    height: auto;
    justify-content: center;
    overflow: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // flex-basis: auto;

    .input {
      flex-basis: 45%;
    }
    .input-description {
      display: block;
      height: 150px;
      flex-basis: 95%;
      margin-bottom: 30px;
    }

    .select-creators-wrapper {
      font-size: 22px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      input {
        margin-top: 0;
      }

      .select {
        font-size: 22px;
        font-weight: normal;
        padding: 10px;
        margin-right: auto;
        margin-left: auto;
        // margin-top: 30px;
        display: inline-block;
        height: 72px;
        color: #444;
        border-radius: 4px;
        line-height: 1.3;
        width: 48%;
        max-width: 100%; /* useful when width is set to anything other than 100% */
        // box-sizing: border-box;
        // margin: 0;
        color: 2c3e50 !important;
        border: 1px solid #707070;
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        appearance: none;
        background-color: #fff;
        background-image: url("../assets/ios-arrow-down.png");
        background-repeat: no-repeat;
        background-position: right 10px top 50%;
      }

      .select:focus {
        border-color: #ffc200;
        outline: none;
      }
    }
    .submit {
      margin-top: 30px;
      height: 50px;
      width: 200px;
      font-size: 22px;
      color: #444;
    }
  }
}
</style>