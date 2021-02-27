<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import "~normalize.css";

// @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap");
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}
* {
  margin: 0px;
  padding: 0px;
  font-family: "Roboto";
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0px;
  margin: 0px;
}

form {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.input {
  display: block;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  margin: 15px 0;
}
.input:hover {
  cursor: pointer;
  border: 1px solid #ffc200;
}
.input:focus {
  outline: none;
  border: 1px solid #ffc200;
}
button.btn,
a.btn {
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  background-color: #ffc200;
  border-radius: 0.3rem;
  color:#333333;
  &:hover {
    opacity: 0.7;
  }
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  &.alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  &.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
}
</style>
