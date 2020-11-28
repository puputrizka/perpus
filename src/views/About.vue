<template>
  <div class="home">
    <!-- <img src="../assets/logo.png" alt="Vue logo"> -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import { directive } from `"vue/types/umd"`;
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
