<template>
  
   <div class="wrapper">

        <div class="rated-wrapper">
            <SettingsPageHeader :msg="title"></SettingsPageHeader>
            <div class="user-rated-wrapper">
                <div class="user-wrapper">
                    <User></User>
                </div>
                    
                <div class="rated-titles">
                    <Rated></Rated>
                </div>
            </div>                              
            
        </div>
    </div>

</template>

<script>
import User from "../components/User";
import SettingsPageHeader from "../components/SettingsPageHeader";
import Rated from "../components/Rated"; 
export default {
  name: 'RatedTitles',
  components: { User, SettingsPageHeader, Rated },
  
  data () {
      return {
          title: 'Ocenione tytuły'
      }
  }
  
};
</script>
<style lang="scss" scoped>

.wrapper{
    width:100%;
    height: 100vh;
   display: flex;
   flex-direction: row;
    justify-content: center;
    align-items: center;
    background-size: auto;
    background-image: url("../assets/slider-bg.png");
    background-repeat: no-repeat;

    .rated-wrapper {
        box-sizing: content-box;
        background-color:#ffffff;
        width: 90%;
        height: 90%;
        
        .user-rated-wrapper {
            display: flex;
            flex-wrap: nowrap;
            width:90%;
            height:80%;
            margin: auto;
            background-color: #ffffff;
               
            .user-wrapper {
                width: 33%;
                height: 100%;
                background-color: #ffffff;
            }
        

            .rated-titles {
            width: 66%;
            background-color: #ffffff;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            }
        }
    }
}
</style>