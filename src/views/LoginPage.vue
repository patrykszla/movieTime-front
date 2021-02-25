<template>
  <div class="login-page-wrapper">  
    <div class="login-page-input-wrapper">
        <div class="login-page-logo"></div>
        <p>Zaloguj się</p>
        <input type="text" id="login-email" class="input" placeholder="E-mail"> 
        <input type="text" id="password" class="input" placeholder="Hasło">
        <input type="submit" id="submit" class="input submit" value="Zaloguj się">
    </div>
  </div>
</template>

<script>


export default {
  
name: 'LoginPage',
};
</script>
<style lang="scss" scoped>

.login-page-wrapper {
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
    .login-page-input-wrapper {
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
        .login-page-logo {
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