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

// @import url("https://fonts.googleapis.com/css?family=Varela+Round");
@font-face {
  font-family: "OCR-A";
  src: local("OCR-A"),
  url(./fonts/OCR-A-Regular.ttf) format("truetype");
}

#app {
  font-family: 'OCR-A', Helvetica, Arial, sans-serif;
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
    font-family: 'OCR-A';
    border-radius: 4px;
    border: 1px solid #707070;
    display: block;
    
    height: 50px;
    margin: auto;
    margin-top: 30px;
    padding: 5px;
    transition: 0.3s;
}

.input:focus {
    outline: none;
    border: 1px solid #FFC200;
}
.submit {
  border: none;
  width: 150px;
  background-color: #FFC200;
}
.submit:focus {
    transition-duration: 0.4s;
}
.submit:hover {
    cursor: pointer;
    opacity: 0.7;
}


</style>
