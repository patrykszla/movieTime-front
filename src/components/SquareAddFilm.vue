<template>

    <div class="square-wrapper">
        <router-link to="/addnewfilm">
            <div class="square-add-film"> 
                
                <img src="../assets/film-solidd.png" alt="MovieTime Logo">
                <p>Dodaj film</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'SquareAddFilm',
  
};
</script>
<style lang="scss" scoped>
.square-wrapper {
    height: 100%;
    width: 100%;

    a {
        text-decoration: none;
        color:#2c3e50;

        .square-add-film {
                
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            flex-direction: column;  
            width:100%;
            height: 100%;
            border-radius: 4px;
            border: 1px solid #333333;
            background-color:#ffffff;
                
            img {
                margin-left:auto;
                margin-right: auto;
                width: 100px;
                height: 50px;
            }
        }
    }
    
   
    

}

</style>