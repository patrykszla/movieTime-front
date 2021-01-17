<template>
    <div class="wrapper">
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
import axios from 'axios';

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
        }
    },
    
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