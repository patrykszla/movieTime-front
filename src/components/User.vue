<template>

  <div class="user"> 

    <img class="user-img" src="../assets/user-o.png" alt="user">
    <p>Cześć <span class="span-gold">{{name}}</span>  !!</p>
    <div class="row"><img src="../assets/md-heart.png" alt="serce"><span>{{ howmuch }} ulubionych tytułów</span></div>
    <div class="row"><img src="../assets/android-star.png" alt="serce"><span>{{ howmuch }} ocenionych tytułów</span></div>
    <div class="row"><img src="../assets/film-solidd.png" alt="serce"><span>{{ howmuch }} dodanych tytułów</span></div>
  
  </div>    

</template>

<script>

export default {

  name: 'User',
   data() {
  return {
    howmuch: '33',
    name: 'Patryk'
  };
}};

</script>
<style lang="scss" scoped>
.user {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .user-img {
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        height: 90px;
        width: 70px;
    }

    .span-gold {
        color:#FFC200;
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