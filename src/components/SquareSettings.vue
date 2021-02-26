<template>

    <div class="square-wrapper">
        <router-link to="/settings">
            <div class="square-settings"> 
                
                <img src="../assets/settings-outline.png" alt="gwiazdka">
                <p>Ustawienia konta</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'SquareSettings',
  
};
</script>
<style lang="scss" scoped>
.square-wrapper {
    height: 100%;
    width: 100%;

    a {
        text-decoration: none;
        color:#2c3e50;

        .square-settings {
                
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