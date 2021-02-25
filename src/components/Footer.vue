<template>
    <div class="footer-wrapper">
        <div class="img-rotate-left-side">
        </div>
        <img src="../assets/film-solid.png" alt="rotated-logo" class="img-rotated img-rotated-left-side-first">
        <img src="../assets/film-solid.png" alt="rotated-logo" class="img-rotated img-rotated-left-side-second">
        <img src="../assets/film-solid.png" alt="rotated-logo" class="img-rotated img-rotated-right-side-first">
        <img src="../assets/film-solid.png" alt="rotated-logo" class="img-rotated img-rotated-right-side-second">
        <img src="../assets/movie-logo.png" class="img-logo" alt="MovieTime logo">
        <p>Copyright 2020</p>
        
    </div>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style lang="scss" scoped>
    .footer-wrapper {
        position: relative;
        font-size: 23px;
        padding-top: 50px;
        overflow: hidden;
        
        .img-logo {
            width: 100px;
            height: 60px;
        }
        
        .img-rotated {
            height: 130px;
            width: 220px;
            position: absolute;
        }
        .img-rotated-left-side-first {
            left: -100px;
            
        }
        .img-rotated-left-side-second {
            left: 150px;
            bottom: -20px;
        }
        .img-rotated-right-side-first {
            right: 150px;
            top: 0px;
        }

        .img-rotated-right-side-second {
            right: -50px;
            bottom: -50px;
        }

        
        
    }
</style>