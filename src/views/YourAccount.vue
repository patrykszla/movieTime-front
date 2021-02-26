<template>
  
   <div class="wrapper">

        <div class="your-account-wrapper">
            <SettingsPageHeader :msg="title"></SettingsPageHeader>
            <div class="user-options-wrapper">
                <div class="user-wrapper">
                    <User></User>
                </div>
                    
                <div class="your-account-options">
                    <Options></Options>
                </div>
            </div>                              
            
        </div>
    </div>

</template>

<script>
import User from "../components/User";
import SettingsPageHeader from "../components/SettingsPageHeader";
import Options from  "../components/Options"
export default {
  name: 'RatedTitles',
  components: { User, SettingsPageHeader, Options },
  
  data () {
      return {
          title: 'Twoje konto'
      }
  }
  
};
</script>
<style lang="scss" scoped>

.wrapper{
    
    font-size: 18px;
    width:100%;
    height: 100vh;
   display: flex;
   flex-direction: row;
    justify-content: center;
    align-items: center;
    background-size: auto;
    background-image: url("../assets/slider-bg.png");
    background-repeat: no-repeat;

    .your-account-wrapper {
        box-sizing: content-box;
        background-color:#ffffff;
        width: 90%;
        height: 90%;
        
        .user-options-wrapper{
            display: flex;
            flex-wrap: nowrap;
           
            height:80%;
            margin: auto;
            background-color: #ffffff;
               
            .user-wrapper {
                width: 33%;
                height: 100%;
                background-color: #ffffff;
            }
        

            .your-account-options {
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