<template>
  <div id="app">
    <!-- <div id="nav-wrapper">
      <div class="nav-wrapper-logo">
        <img src="./assets/movie-logo.png" class="img-logo" alt="MovieTime logo">
      </div>

      <div class="nav-links-wrapper">
        <router-link to="/searchfilm"><img class="img-nav" src="./assets/search-outline.png" alt="search"></router-link>
        <router-link to="/settings"><img class="img-nav" src="./assets/settings-outline.png" alt="settings"></router-link>
        <router-link to="/searchfilm"><img class="img-nav" src="./assets/user-o.png" alt="user"></router-link>
      </div>
    </div>
    -->
    <router-view/> 
    
  </div>
</template>

<script>
export default {
 
//  computed: {
//   isLogin() {
//      return this.$route.name === 'registration'
//   }
// }
  
}
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding:0px;
  margin: 0px;
}


// #nav-wrapper {
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   height: 90px;

// .nav-links-wrapper {
//   width: 33%;
//   justify-content: center;
//   display: flex;
//   align-items: center;

// }
// .nav-wrapper-logo {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width:33%;
//   height: 90px;
  
// }
// // .img-logo{
// //   width: 33%;
// //   height: 55px;
// // }
// .img-nav {
//   width: 100%;
//   height: 100%;
// }

//   a {
//     display:inline-block;
//     height: 35px;
//     width:35px;
//     margin: 10px;
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
