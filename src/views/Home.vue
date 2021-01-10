<template>
  <div class="home">
    <New />
    <ul>
      <li v-for="comment in comments" class="comment" :key="comment.id">
        <p> {{comment.name }} </p>
        <p> {{ comment.content}} </p>
      </li>    
    </ul>  
  </div>
</template>

<script>
import New from "../components/New";


export default {
  name: 'Home',
  components: {
    New
  },
  data() {
    return {
      comments: [
        {
        name: "patryk",
        content: 'best',
        },
        {
        name: "patryk2",
        content: 'best2',
        },
        {
        name: "patryk3",
        content: 'best3',
        },
        {
        name: "patryk4",
        content: 'best4',
        },
      ],
    };
  }
};
</script>
<style lang="scss" scoped>
.comment {
  background: red;
  margin: 10px;
}
</style>