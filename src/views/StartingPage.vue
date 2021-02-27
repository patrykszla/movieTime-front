<template>
  <div class="starting-page-wrapper"> 
      <Navigation></Navigation>
    <div class="starting-page-latest-slider-wrapper"><LatestSlider></LatestSlider></div>
    <div class="starting-page-popular-slider-wrapper"><PopularSlider></PopularSlider></div>
    <div class="starting-page-trends-slider-wrapper"><TrendsSlider></TrendsSlider></div>
       
  </div>
</template>

<script>
import LatestSlider from "../components/LatestSlider.vue";
import PopularSlider from "../components/PopularSlider.vue";
import TrendsSlider from "../components/TrendsSlider.vue";
import Navigation from '../components/Navigation.vue';

export default {

  name: 'StartingPage',
  components: {LatestSlider, PopularSlider, TrendsSlider, Navigation},
  
};
</script>
<style lang="scss" scoped>

.starting-page-wrapper{ 
    display: flex;
    flex-direction: column;

    .starting-page-latest-slider-wrapper {
        width: 100% ;
        background-size: auto;
        background-image: url("../assets/slider-bg.png");
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
    } 

    .starting-page-popular-slider-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        
        
    }
    .starting-page-trends-slider-wrapper {
        display: flex;
        justify-content: center;
        background-color: #333333;
        width: 100%;
    }
}

</style> 