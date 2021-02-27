<template>

  <div class="settings-inputs-wrapper">
    
      <input type="text" id="nick-settings" class="input" placeholder="Nick"> 
      <input type="email" id="email-settings" class="input" placeholder="E-mail">
      <input type="text" id="password-settings" class="input" placeholder="Hasło"> 
      <input type="text" id="password-repeat-settings" class="input" placeholder="Powtórz hasło"> 
      <input type="submit" id="submit-settings" class="submit btn" value="Aktualizuj">
  </div>

</template>

<script>
export default {
  name: 'InputsSettings',
  
};
</script>
<style lang="scss" scoped>

  .inputs-wrapper {
      width: 60%;
      display: flex;
      justify-content: center;

      input.btn {
        width: 200px;
}

  }
  
</style>