<template>
  <div id="app">
 
    <router-view/> 
    
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">


// @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap");
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
  url(./fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding:0px;
  margin: 0px;
}
.input {
    font-family: 'Roboto';
    border-radius: 4px;
    border: 1px solid #707070;
    display: block;
    font-size: 22px;
    height: 50px;
    margin: auto;
    margin-top: 30px;
    transition: 0.3s;
    padding: 10px;
}
.input:hover {
  cursor: pointer;
  border: 1px solid #FFC200;
}
.input:focus {
    outline: none;
    border: 1px solid #FFC200;
}
.submit {
 
  border-radius: 4px;
  border: none;
  width: 200px;
  background-color: #FFC200;
}
.submit:focus {
    transition-duration: 0.4s;
    outline: none;
}
.submit:hover {
  border: none;
  outline: none;
    cursor: pointer;
    opacity: 0.7;
}


</style>
