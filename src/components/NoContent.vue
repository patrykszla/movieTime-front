<template>
  <div class="no-content-wrapper"> 
    <p>Aktualnie nie masz tutaj nic :(</p>
    <button class="btn">Znajdź coś dla siebie</button>
  </div>
</template>

<script>
export default {
  name: 'NoContent',
  
};
</script>
<style lang="scss" scoped>
.no-content-wrapper {
  margin-top:100px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  .btn {
     font-family: 'OCR-A';
    border-radius: 4px;
    border: 1px solid #707070;
    display: block;
    width: 50%;
    height: 50px;
    margin: auto;
    margin-top: 30px;
    padding: 5px;
    transition: 0.3s;
    background-color: #FFC200;
    transition: 0.3s;
    outline: none;
  }
  
  .btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

}
</style>