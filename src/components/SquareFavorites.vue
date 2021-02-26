<template>

    <div class="square-wrapper">
        <router-link to="/favoritetitles">
            <div class="square-favorites"> 
                
                <img src="../assets/md-heart.png" alt="Serce">
                <p>Zajrzyj do ulubionych</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'SquareFavorites',
  
};
</script>
<style lang="scss" scoped>
.square-wrapper {
    height: 100%;
    width: 100%;

    a {
        text-decoration: none;
        color:#2c3e50;

        .square-favorites {
                
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