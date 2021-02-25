<template>

    <div class="page-title">
                <img src="../assets/movie-logo.png" alt="movieTime logo">
                <p class="paragraph-page-title">{{ msg }}</p>
    </div>
  
</template>

<script>
export default {
  name: 'SettingsPageHeader',
  props: ['msg'],
  data () {
      return {
          title: '',
      }
  }
};
</script>
<style lang="scss" scoped>

.page-title {
    box-sizing: content-box;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;
    height:15%;
    width: 50%;
    margin-left: 15px;
    background-color: #FFFFFF;
    
    img {
        height: 82px;
        width: 116px;
    }
    p {
        margin-left: 20px;
        width:80%;
        display: inline-block;
    }
}

</style>