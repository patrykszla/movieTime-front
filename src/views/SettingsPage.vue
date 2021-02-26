<template>
    <div class="wrapper">
        
        

        <div class="settings-wrapper">
            <SettingsPageHeader :msg="title"></SettingsPageHeader>
            <div class="account-update-wrapper">
                <div class="user-wrapper">
                    <User></User>
                </div>

                <div class="update-wrapper">
                    <InputsSettings></InputsSettings>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import User from "../components/User";
import SettingsPageHeader from "../components/SettingsPageHeader";
import InputsSettings from "../components/InputsSettings";


export default {
    name: 'SettingsPage',
    components: { User, SettingsPageHeader, InputsSettings },
    data() {
  return {
    title: 'Ustawienia konta',
  };
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

    .settings-wrapper {
        box-sizing: content-box;
        background-color:#ffffff;
        width: 90%;
        height: 90%;
        
        .account-update-wrapper {
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
        

            .update-wrapper {
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