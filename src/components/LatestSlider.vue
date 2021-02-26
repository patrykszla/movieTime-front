<template>
    <div class="latest-slider-wrapper">
        
        
        <h1>Rekomendacje</h1>
        <div class='recomendations-slider'>
            
                <vueper-slides
                    class="no-shadow"
                    :visible-slides="4"
                    :dragging-distance="70"
                    :arrows-outside="false"
                    >
                    <template v-slot:arrow-left>
                        <i class="icon icon-arrow-left" id="icon-arrow-left"/>
                    </template>
                    <template v-slot:arrow-right>
                        <i class="icon icon-arrow-right" id="icon-arrow-right"  />
                    </template>
                    
                    <vueper-slide v-for="slide in slides" :key="slide.id" :title="slide.title" :image="slide.image" :content="slide.content"/>
                     
                </vueper-slides>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestSlider',
};
</script>

<style>



</style>