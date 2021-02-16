<template>
    <div class="wrapper">
        <div v-for="movie in movies" :key="movie.id">
                <Navigation></Navigation>
            <div class="movie-image-title"  v-bind:style="{ backgroundImage: 'url(' + movie.image + ')' }">
                <h1 class="movie-title movie-title-big">{{ movie.title }}</h1>
            </div>
            <div class="movie-description-wrapper">
                <div class="movie-icon" v-bind:style="{ backgroundImage: 'url(' + movie.image2 + ')' } ">
                    
                </div> 
                <div class="movie-description">
                    <h3 class='movie-title movie-title-small'>{{ movie.title }}</h3>
                    <div class="description">
                        <p>Opis:</p>
                    </div>
                    <div class="type-creator-wrapper">
                        <div class="type">
                            <p>Typ:</p>
                        </div>
                        
                        <div class="creator">
                            <p>Twórcy:</p>
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from "../components/Navigation"
export default {
    components:{ Navigation },
    name: 'FilmDetails',
    
    data () { 
        return{
            movies: [{
                id: 'slide-1',
                title: 'Gambit królowej',
                content: 'Amerykański stan Kentucky, lata 50. XX wi Mieszkająca w sierocińcu dziewczyna odkrywa swój wielki talent szachowy Jednocześnie musi walczyć z uzależnieniem',
                grade: '33%',
                image: 'https://ocdn.eu/pulscms-transforms/1/2dxk9kpTURBXy8zOGNmNmE0YzQyMDNkNjYzZTFjZDYyNTljMjU1ZmNhYS5qcGeTlQMVAM0D1c0CKJMFzQMUzQG8kwmmYWUzMzYyBoGhMAE/marcin-dorocinski-i-anya-taylorjoy-na-planie-serialu-gambit-krolowej.jpg',
                image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujczsEwfaILjjZG0PgPrTU8EGorcd-Xn22g&usqp=CAU'
            }]}
    }
};
</script>

<style lang="scss" scoped>

#wrapper{ 
    width: 100%;
    height: 100vh;
    
    
    
}

.movie-image-title {
        width:100%;
        height: 80vh;
        background-size: cover;
        background-repeat: no-repeat;
        display:flex;
        flex-wrap:nowrap;
        justify-content: center;
        align-items: center;
        color: transparent;
        text-shadow: 0 0 1px rgba(255,255,255, 0.4);
        
    }

    .movie-title {
    text-transform: uppercase;
    }
    .movie-description-wrapper {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap:nowrap;
        flex-direction: row;
        box-sizing: content-box;

        .movie-icon {
            width: 33%;
            height: 200px;
            background-size: cover;
            margin: 30px;
        }

        .movie-description {
            width: 66%;

            .type-creator-wrapper {
                display: flex;
                flex-wrap: nowrap;     
                
                .type {
                    width: 50%;

                }       

                .creator    {
                    width:50%;
                }   
            }
        }
    }
</style>