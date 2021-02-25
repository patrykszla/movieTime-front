<template>
    <div class="recomendations-wrapper">
        
        <div class="recomendations-left-side">
            <h1>Rekomendacje</h1>
        </div>
         <div class='recomendations-slider'>
              
                <vueper-slides
                    class="no-shadow"
                    :visible-slides="4"
                    
                    :gap="3"
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
    
  name: 'Recomendations',
  
  data () {
        return {
            searchValue: '',
            apiResults: [],
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

     components: { VueperSlides, VueperSlide },
};
</script>
<style lang="scss">

    .recomendations-wrapper {
        background-color: #333333;
        color: #FFFFFF;
        margin: auto;
        width: 100%;
        // height: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: content-box;

        .recomendations-left-side {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            
        }
        .recomendations-slider {
            width: 70%;
            padding: 40px;
            margin: auto;

            // .vueperslides__content-wrapper {
            //     // width: 80%;
            //     height: 50%;
            // }

            .vueperslide {
            width: 80%;
            height:80%;
            }
            //  .vueperslides__bullets {
            //      top: 30px;
            // }
            .vueperslides__bullet .default {
                    background-color: #FFFFFF;
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
                    // margin: 20px;
                    // top: 0;
                }   
                
                .vueperslides__arrow--next {
                    //  right: -12%;
                    top: 117%;
                    right: 15%;
                    // bottom: 30%;
                }
                
                .vueperslides__arrow--prev {
                   top: 117%;
                    left: 15%;
                }
                .icon-arrow-right:before {
                    display: block;
                    content: ' ';
                    background-image: url('../assets/arrow-round-next.png');
                    background-repeat: no-repeat;
                    // background-size: cover;
                    // background-size: 28px 28px;
                    height: 35px;
                    width: 50px;
                 }

                 .icon-arrow-left:before {
                    // margin: 10px;
                    display: block;
                    content: ' ';
                    background-image: url('../assets/arrow-round-back.png');
                    background-repeat: no-repeat;
                    // background-size: 28px 28px;
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

                //  .vueperslide__title {
                //      float: bottom;
                //      position: absolute;
                //      bottom: -20px;
                //      z-index: 1;
                //  }
        }
    }

  

        
            
            
</style>