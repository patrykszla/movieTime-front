<template>
<div class="your-account-optiions-wrapper">
    <div class="square"><SquareAddFilm></SquareAddFilm></div>
    <div class="square"><SquareFavorites></SquareFavorites></div>
    <div class="square"><SquareRated></SquareRated></div>
    <div class="square"><SquareSettings></SquareSettings></div>
           
</div>
</template>

<script>
import SquareAddFilm from "../components/SquareAddFilm.vue"
import SquareFavorites from "../components/SquareFavorites.vue"
import SquareRated from "../components/SquareRated.vue"
import SquareSettings from "../components/SquareSettings.vue"
export default {
    components: {SquareAddFilm, SquareFavorites, SquareRated, SquareSettings},
    name: 'Options',
};
</script>
<style lang="scss" scoped>


.your-account-optiions-wrapper {
    font-family: Roboto;
     background-color: #FFFFFF;
     width: 100%;
     height: 100%;
     overflow: auto;
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     align-items: center;
     justify-content: center;

    .square {
        
       margin: 10px;
        height: 150px;
        flex-basis: 20%;
    }
    

}

</style>