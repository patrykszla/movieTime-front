
<template>
    <div class="wrapper">
        <div class='nav'>
                <Navigation></Navigation>
        </div>
       <div class='slider-wrapper'>
               <vueper-slides
                class="no-shadow"
                :visible-slides="2"
                arrows-outside
                :dragging-distance="70"
                >
                    <template v-slot:arrow-left>
                        <i class="icon icon-arrow-left" id="icon-arrow-left"/>
                    </template>
                    <template v-slot:arrow-right>
                        <i class="icon icon-arrow-right" id="icon-arrow-right"  />
                    </template>
                <vueper-slide v-for="slide in slides" :key="slide.id" :title="slide.title" :image="slide.image"  />
                </vueper-slides>
       </div>
        <div class="search">
            <label for="search-movie"></label>
            <input 
            id="search-movie"
             name="search" 
             v-model="searchValue"
             @input="handleInput"
             />
        </div>
        <div>
            <ul>
            <li v-for="item in apiResults" :key="item.id">
                <p>{{ item.overview }}</p>
                
                </li>    
            </ul>    
        </div>
    </div>      
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

import axios from 'axios';
import Navigation from '../components/Navigation.vue';

const cos = 'https://api.themoviedb.org/3/search/movie?api_key=bd035d96c0f6075f91b68f394a5b79f1&query=Jack'

const api= 'https://api.themoviedb.org/3/'

const apiKey = 'bd035d96c0f6075f91b68f394a5b79f1'

const apiNasa ='https://images-api.nasa.gov/search'

export default {
    name: 'SearchFilm',
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
            image: require('@/assets/user-o.png')
                },
                {
                    id: 'myslide',
            title: 'my slide2',
            content: 'content 2',
            image: require('@/assets/movie-logo.png')
                },
                {
                    id: 'myslide2',
            title: 'my slide3',
            content: 'content 3',
            image: require('@/assets/settings-outline.png')
                },
                {
                    id: 'myslide3',
            title: 'my slide4',
            content: 'content 4',
            image: require('@/assets/search-outline.png')
                },
                ]
        }
    },
    components: {
         VueperSlides, VueperSlide, Navigation },
    
    methods: {

        handleInput() {
            axios.get(`${api}search/movie?api_key=${apiKey}&query=${this.searchValue}`)
                .then((response) => {
                    this.apiResults = response.data.results;
                    console.log(this.apiResults);
                    // console.log(response.data.results);
                })
                .catch((error) =>{
                    console.log(error);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
    height: 500px;
    width: 80%;
    background: white;
    // .icon-arrow-right {
    //    height: 50px;
    //    width: 50px;
    //     // background-image: url('../assets/ios-arrow-round-back.svg');
    //     background-color: red;
    // }
    
}

.icon-arrow-right:before {
  display: block;
  content: ' ';
  background-image: url('../assets/arrow-round-next.png');
  background-size: 28px 28px;
  height: 28px;
  width: 28px;
}

.icon-arrow-left:before {
  display: block;
  content: ' ';
  background-image: url('../assets/arrow-round-back.png');
  background-size: 28px 28px;
  height: 28px;
  width: 28px;
  
}
// .vueperslides_arrow {
//         stroke-width: 2;
//         color: yellow;
//     }
//     .vueperslides__arrow--next svg {
//     height:30px;
//     width:30px;
//     background: url(../assets/ios-arrow-round-back.svg);
// }
.nav {
    height: 100px;
    width: 100%;
}
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    background-color: blue;
    height: 100vh;
    .search {
        width: 80%;
    }
    input {
    height: 30px;
    border: 1px solid #000000;
    }

    input:focus {
    outline: none;
    }
}
</style>