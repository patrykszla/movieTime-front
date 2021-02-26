<template>
    <div class="wrapper">
        <div v-for="movie in movies" :key="movie.id">
                <Navigation></Navigation>
            <div class="movie-image-title"  v-bind:style="{ backgroundImage: 'url(' + movie.image + ')' }">
                <h1 class="movie-title movie-title-big">{{ movie.title }}</h1>
            </div>
            <div class="film-details-wrapper">
                <div class="movie-icon" v-bind:style="{ backgroundImage: 'url(' + movie.image2 + ')' } ">
                    
                </div> 
                <div class="movie-description">
                    <h3 class='movie-title movie-title-small'>{{ movie.title }}</h3>
                    <div class="description">
                        <p class="paragraph">Opis:</p>
                        <div class="description-wrapper">
                            {{ movie.content }}
                        </div>
                    </div>

                    <div class="type-creator-wrapper">
                        <div class="type">
                            <p class="paragraph" >Typ:</p>
                            <div class="type-wrapper">
                                <div class="rectangle rectangle-gold">{{ movie.type }}</div>
                            </div>                        
                        </div>
                        
                        <div class="creators-wrapper">
                            <p class="paragraph">Twórcy:</p>
                            <div class="creators">
                                <div class="rectangle rectangle-grey " v-for="creator in movie.creators" :key="creator">{{ creator}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="grades-wrapper">
                        <p class="paragraph">Ocena:</p>
                        <div class="grade">
                            {{ movie.grade }}
                        </div>
                        <p class="paragraph">Twoja Ocena:</p>
                        <div class="your-grade">

                        </div>
                        <div class="favorite-film">

                        </div>
                    </div>

                        
                    
                    
                </div>
            </div>
        </div>

        <div class="film-details-recomendations">
            
            <Recomendations></Recomendations>

        </div>
        <div class="film-details-footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Recomendations from "../components/Recomendations.vue"
export default {
    components:{ Navigation, Recomendations, Footer},
    name: 'FilmDetails',
    
    data () { 
        return{
            movies: [{
                id: 'slide-1',
                title: 'Gambit królowej',
                content: 'Amerykański stan Kentucky, lata 50. XX wi Mieszkająca w sierocińcu dziewczyna odkrywa swój wielki talent szachowy Jednocześnie musi walczyć z uzależnieniem',
                grade: '33%',
                creators: ['adas', 'andrzej'],
                type: 'Dramat',
                image: 'https://ocdn.eu/pulscms-transforms/1/2dxk9kpTURBXy8zOGNmNmE0YzQyMDNkNjYzZTFjZDYyNTljMjU1ZmNhYS5qcGeTlQMVAM0D1c0CKJMFzQMUzQG8kwmmYWUzMzYyBoGhMAE/marcin-dorocinski-i-anya-taylorjoy-na-planie-serialu-gambit-krolowej.jpg',
                image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujczsEwfaILjjZG0PgPrTU8EGorcd-Xn22g&usqp=CAU'
            }]}
    }
};
</script>

<style lang="scss" scoped>
 

#wrapper{ 
    width: 100%;
    height: 200vh;
    
    
    
}

.movie-image-title {
        width:100%;
        height: 80vh;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display:flex;
        flex-wrap:nowrap;
        justify-content: center;
        align-items: center;
        color: transparent;
        text-shadow: 0 0 1px rgba(255,255,255, 0.4);
        
        h1 {
            font-size: 70px;
        }
    }

    .movie-title {
    text-transform: uppercase;
    }
    .film-details-wrapper {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap:nowrap;
        flex-direction: row;
        box-sizing: content-box;
        text-align: left;

        .paragraph {
            text-align: left;
        }
        .movie-icon {
            width: 33%;
            height: 200px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin: 30px;
        }

        .movie-description {
            width: 66%;

            .rectangle {
                        // width: 
                        text-align: center;
                        padding: 5px;
                        // margin: 10px;
                        // width: auto;
                        // margin: auto;
                        background-color: rgba(255,194,0, 0.8);
                        color:#ce9c00;
                        opacity: 0.7;
                        border-radius: 4px;
                        margin-right: 15px;
                        width: fit-content;
                    } 
            
            .type-creator-wrapper {
                display: flex;
                flex-wrap: nowrap;     
                
                .type {
                    width: 50%;
                    
                    
                }       

                .creators    {
                    display:flex;
                    flex-direction: row;
                    width:50%;
                    .rectangle-grey {
                        text-align: center;
                        // padding: 5px;
                        
                        // width: auto;
                        // margin: auto;
                        background-color: rgba(51,51,51,0.8);
                        color:#333333;
                        opacity: 0.7;
                        border-radius: 4px;
                    } 
                }   
            }
        }
        .film-details-recomendations {
            width: 100%;
            display:flex;
            flex-direction: row;

            // .recomendations-left-side{
            //     width: 33%;
            //     height: 100%;
                
            //     p { 
            //         display: inline-block;
            //     }
            // }
            
            // .recomendations-right-side {
            //     width: 66%;
            //     height: 100%;
            // }

        }
    }
</style>