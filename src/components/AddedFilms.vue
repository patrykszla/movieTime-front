<template>
    <div class="added-films-main-wrapper">
        <div class="added-films-wrapper">
           
            <div class="if-no-content" v-if="!items.length"><NoContent></NoContent></div>
            <div class="single-movie" v-for="item in items" :key="item.id">
                
                
                <div class="film-image" v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }">

                </div>
                <p>{{item.title}}</p>

            </div>
        </div>
    </div>
</template>

<script>
import NoContent from "./NoContent";
export default {
    
  name: 'AddedFilms',
  components: {
      'NoContent': NoContent
  },
  data () {
      return { 
            searchValue: '',
            apiResults: [],
            items: [
            //     {
            //     id: 'slide-1',
            // title: 'Slide 1',
            // content: 'content 1', 
            // // image: url("../assets/user-o.png")
            // image: require('@/assets/android-star.png')
            //     },
            //     {
            //         id: 'myslide1',
            // title: 'my slide1',
            // content: 'content 1',
            // image: require('@/assets/movie-logo.png')
            //     },
            //     {
            //         id: 'myslide2',
            // title: 'my slide2',
            // content: 'content 2',
            // image: require('@/assets/movie-logo.png')
            //     },
            //     {
            //         id: 'myslide3',
            // title: 'my slide3',
            // content: 'content 3',
            // image: require('@/assets/md-heart.png')
            //     },
            //      {
            //         id: 'myslide4',
            // title: 'my slide4',
            // content: 'content 4',
            // image: require('@/assets/movie-logo.png')
            //     },
            //      {
            //         id: 'myslide5',
            // title: 'my slide5',
            // content: 'content 5',
            // image: require('@/assets/movie-logo.png')
            //     },
            //      {
            //         id: 'myslide6',
            // title: 'my slide6',
            // content: 'content 6',
            // image: require('@/assets/movie-logo.png')
            //     },
            //      {
            //         id: 'myslide7',
            // title: 'my slide7',
            // content: 'content 7',
            // image: require('@/assets/movie-logo.png')
            //     },
            ]
        }
    }, 
};
</script>
<style lang="scss" scoped>


.added-films-main-wrapper {
     background-color: red;
     width: 100%;
     height: 100%;
     overflow: auto;

    .added-films-wrapper {
        width: 100%;
        height: 100%;
        height: auto;
        justify-content: center;
        overflow: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-basis: auto;
        
        .if-no-content {
            width: 100%;
            height: 100%;
        }


        .single-movie {
            margin: 10px;
            background:pink;
            width: 20%;
            height: 50%;
            display: inline-block;

            .film-image {
                width: 100%;
                height: 200px;
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }
    }
}

</style>