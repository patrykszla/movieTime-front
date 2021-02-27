<template>
    <div class="popular-slider-wrapper">
        
        
        
        <h1>Popularne</h1>
        <div class='popular-slider'>
            
                <vueper-slides
                    class="no-shadow"
                    :visible-slides="5"
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
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
  name: 'PopularSlider',
   components: {VueperSlides, VueperSlide},
     data () {
        return {
            slides: [
                {
                id: 'slide-1',
            title: 'Slide 1',
            content: 'content 1', 
            // image: url("../assets/user-o.png")
            image: require('@/assets/movie-logo.png')
                },
                {
                    id: 'myslide1',
            title: 'my slide1',
            content: 'content 1',
            image: require('@/assets/movie-logo.png')
                },
                {
                    id: 'myslide2',
            title: 'my slide2',
            content: 'content 2',
            image: require('@/assets/movie-logo.png')
                },
                {
                    id: 'myslide3',
            title: 'my slide3',
            content: 'content 3',
            image: require('@/assets/movie-logo.png')
                },
                 {
                    id: 'myslide4',
            title: 'my slide4',
            content: 'content 4',
            image: require('@/assets/movie-logo.png')
                },
                 {
                    id: 'myslide5',
            title: 'my slide5',
            content: 'content 5',
            image: require('@/assets/movie-logo.png')
                },
                 {
                    id: 'myslide6',
            title: 'my slide6',
            content: 'content 6',
            image: require('@/assets/movie-logo.png')
                },
                 {
                    id: 'myslide7',
            title: 'my slide7',
            content: 'content 7',
            image: require('@/assets/movie-logo.png')
                },

                ]
        }
    },
};
</script>

<style lang="scss" >

.popular-slider-wrapper {
        
       text-align: left;
        
        height: auto;
        width: 90%;

        h1{
            color: #333333;
            font-size: 50px;
            display: inline-block;
            width: 50%;
            text-align: center
            
        }

        .popular-slider {
            align-self:flex-end;
            height: auto;
            
             .vueperslide {
            background-size: 80% 80%;
            background-repeat: no-repeat;
            height:80%;
            }
        }
       
           
            .vueperslides__bullet .default {
                    background-color: #333333;
                    border: none;
                    box-shadow: none;
                    transition: 0.3s;
                    width: 16px;
                    height: 16px;
                }
                .vueperslides__bullet--active .default {
                    background-color: #FFC200;
                }
                .vueperslides__arrow svg {
                    color: #FFC200;
                }   
                
                
                .icon-arrow-right:before {
                    display: block;
                    content: ' ';
                    background-image: url('../assets/arrow-round-next.png');
                    background-repeat: no-repeat;
                    height: 35px;
                    width: 50px;
                 }

                 .icon-arrow-left:before {
                    display: block;
                    content: ' ';
                    background-image: url('../assets/arrow-round-back.png');
                    background-repeat: no-repeat;
                    height: 35px;
                    width: 50px;
                    margin: 0px;
                }

                 .vueperslide__content {
                     position: absolute;
                     right: 0;
                     bottom: 0;
                     z-index: 2;
                    //  height: 80%;
                 }
                .vueperslide__title {
                    text-align: center;
                    position: absolute;
                    top: 100%;
                    margin-top: 0.5em;
                    left: 0;
                    right: 0;
                    z-index: 2;
                }
    }
        

       
       
           
            
</style>