<template>
  <div class="search-film-wrapper"> 
      <div class="search-film-second-wrapper">
          <div class="input-search-wrapper">
              <input type="text" class="search-input" placeholder="Znajdź film..">
              <button class="search"><img src="../assets/search-outline-white.png" alt="search"></button>
          </div>
      </div>
      
      <div class="found-wrapper">
          <div class="found-film" v-for="movie in movies" :key="movie.title">
              <div class="film-image" v-bind:style="{ backgroundImage: 'url(' + movie.image + ')' }">

                </div>
                <p>{{movie.title}}</p>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilm',
  data () {
      return{
            movies: [{
                title: 'tytul',
                image: require('@/assets/android-star.png')
            },
            {
                title: 'tytul2',
            image: require('@/assets/android-star.png')
            }
            ,{
                title: 'tytul3',
            image: require('@/assets/android-star.png')
            },
            
            ]
            
          
      }
  }
  
};
</script>
<style lang="scss" scoped>
.search-film-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #FFFF;
    
    .search-film-second-wrapper{
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        background-color: #FFFF;
        height: 350px;
        
    .input-search-wrapper {
        font-family: Roboto;
            font-size: 28px;
        width: 100%;
        height:  110px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        .search {
            border-radius: 4px;
            display: inline-block;
            height: 110px;
            width: 135px;
            background-color: #FFC200;
            justify-content: center;
            transition: 0.3s all;

            img {
                
                width: 60px;
                height: 60px;
            }

           
        }
         .search:focus {
                outline: none;
                border: none;
            }
            .search:hover {
                opacity: 0.8;
                cursor: pointer;
            }
         .search-input {
             padding-left: 20px;
             font-family: Roboto;
            font-size: 28px;
            width: 60%;
            height: 90px;
        }

        .search-input:hover {
            cursor: pointer;
        }
        .search-input:focus {
            outline: none;
            cursor: pointer;
        }
    }
   .found-wrapper {
       margin: auto;
       height: auto;
       width: 90%;
       overflow: auto;
       display: flex;
       flex-direction: row;
       justify-content: center;
       flex-wrap: wrap;
       background-color: #FFFF;

       .found-film {
           flex-basis: 15%;
           margin: 20px;
           height: 200px;
           background-color: white;

           .film-image {
               width: 100%;
               height: 80%;
               background-size: 100% 80%;
               background-repeat: no-repeat;
           }
       }
   }
}
</style>