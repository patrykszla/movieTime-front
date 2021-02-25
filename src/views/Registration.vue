<template>
  <div class="registration-page-wrapper">
    <div class="registration-page-input-wrapper">
        <div class="registration-page-logo"></div>
        <p>Zarejestruj się</p>
        <input type="text" id="registration-nick" class="input" placeholder="Nick"> 
        <input type="text" id="registration-email" class="input" placeholder="E-mail">  
        <input type="text" id="registration-password" class="input" placeholder="Hasło">
        <input type="text" id="registration-repeat-password" class="input" placeholder="Powtórz hasło">
        <input type="submit" id="registration-submit" class="input submit" value="Zarejestruj się" v-on:click="displayNav">
        
    </div>
  </div>
</template>

<script>
export default {
name: 'Registration',

methods: {
    // display() {
    //     this.$refs.myId.st
    //     document.getElementById('registration-submit').addEventListener('click', this.displayNav);
    // },
    displayNav: function (event) {
        // this.$refs.registration-nick.classList.add("display-none")
            document.getElementById("registration-nick").classList.add("display-none");
        console.log('kliknales')
        }
    }
}


</script>
<style lang="scss">

.display-none {
    display: none;
}

.registration-page-wrapper {
font-size: 14px;
width: 100%;
height: 100vh;
margin: 0px;
    padding: 0px;
display: flex;
justify-content: center;
align-items: center;
background-size: auto;
background-image: url("../assets/slider-bg.png");
background-repeat: no-repeat;

p {
font-size: 30px;
}
    .registration-page-input-wrapper {
        width    : 32%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin: auto;
        display: inline-block;
        background-color: #FFFFFF;
        padding: 30px;
        .registration-page-logo {
            margin: auto;
            width: 100px;
            height: 57px;
            background-repeat: no-repeat;
            background-size: 100%;
            background-image: url("../assets/movie-logo2.png")
        }
        .input {
            width: 80%;
        }

        .submit {
            width: 150px;
        }   
    }
}
</style>