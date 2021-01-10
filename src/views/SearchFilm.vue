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
    </div>
</template>

<script>
export default {
    name: 'SearchFilm',
    data () {
        return {
            searchValue: '',
        }
    },
    methods: {
        handleInput() {
            console.log(this.searchValue);
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