<template>
    <div id="navigation">
         <div id="nav-wrapper">
            <div class="nav-wrapper-logo">
                <img src="../assets/movie-logo.png" class="img-logo" alt="MovieTime logo">
            </div>

            <div class="nav-links-wrapper">
                <router-link to="/searchfilm"><img class="img-nav" src="../assets/search-outline.png" alt="search"></router-link>
                <router-link to="/settings"><img class="img-nav" src="../assets/settings-outline.png" alt="settings"></router-link>
                <router-link to="/youraccount"><img class="img-nav" src="../assets/user-o.png" alt="user"></router-link>
                <button  @click="logOut" class="btn-log-out"><img src="../assets/log-out-outline.png" class="img-nav" alt="log out"></button>
            </div>
        </div>
    
        <router-view/>
    

    </div>
</template>

<script>

export default {
  name: 'Navigation',

    

    methods: {
      
      logOut() {
        const { dispatch } = this.$store;
          dispatch("authentication/logout", console.log('logout'));
        }
      },
    
};
</script>

<style lang="scss" scooped>
#navigation {
    background-color: #ffffff;
}


#nav-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 90px;

.nav-links-wrapper {
  width: 33%;
  justify-content: center;
  display: flex;
  align-items: center;

    .btn-log-out {
       display:inline-block;
    height: 35px;
    width:35px;
    margin: 10px;
     background-color:#fff;
     border: none;
    
    }
    .btn-log-out:hover {
      outline: none;
      cursor: pointer;
    }
    .btn-log-out:focus {
      outline: 0 !important;
    }

    .btn-log-out img:focus {
      outline: none;
    }

}
.nav-wrapper-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width:33%;
  height: 90px;
  
}
.img-nav {
  width: 100%;
  height: 100%;
}

  a {
    display:inline-block;
    height: 35px;
    width:35px;
    margin: 10px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
}

</style>