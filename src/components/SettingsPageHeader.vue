<template>

    <div class="page-title">
                <img src="../assets/movie-logo.png" alt="movieTime logo">
                <h2 class="paragraph-page-title">{{ msg }}</h2>
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
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFFFFF;
    padding: 10px;
    
    img {
        width: 120px;
    }
    h2 {
        margin-left: 20px;
        font-weight: normal;
        font-size: 24px;
    }
}

</style>