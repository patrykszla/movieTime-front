<template>
  <div class="user">
    <img class="user-img" src="../assets/user-o.png" alt="user" />
    <p>
      Cześć <span class="span-gold">{{ user.name }}</span> !!
    </p>
    <div class="row">
      <img src="../assets/md-heart.png" alt="serce" /><span
        >{{ favouritiesCount }} ulubionych tytułów</span
      >
    </div>
    <div class="row">
      <img src="../assets/android-star.png" alt="serce" /><span
        >{{ ratedCount }} ocenionych tytułów</span
      >
    </div>
    <div class="row">
      <img src="../assets/film-solidd.png" alt="serce" /><span
        >{{ addedMoviesCount }} dodanych tytułów</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      favouritiesCount: 0,
      ratedCount: 0,
      addedMoviesCount: 0,
    };
  },
  computed: {
    user() {
      return this.$store.state.authentication.user.user;
    },
  },
  created() {
      const { dispatch } = this.$store;

    dispatch("movie/getUserMovies").then((data) => {
      if (data && data.length > 0) {
        this.addedMoviesCount = data.length;
      }
    });
    dispatch("rated/getRatedMovies").then((data) => {
      if (data && data.length > 0) {
        this.ratedCount = data.length;
      }
    });
    dispatch("favourite/getFavouriteMovies").then((data) => {
      if (data && data.length > 0) {
        this.favouritiesCount = data.length;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.user {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .user-img {
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
  }

  .span-gold {
    color: #ffc200;
    text-transform: capitalize;
  }

  .row {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 30px;
      margin-right: 15px;
      width: 50px;
      height: 50px;
    }

    span {
      margin-left: 15px;
      margin-right: 30px;
    }
  }
}
</style>