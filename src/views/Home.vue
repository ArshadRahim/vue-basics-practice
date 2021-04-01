<template>
  <div class="home">
   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button>Login Now</button>
    <p>New here ? </p>
    <button>SignUp </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
button{
      color: #fff;
      font-weight: bold;
      background-color: #42b983;
      border: none;
      outline: none;
      height: 50px;
      width: 100px;
      border-radius: 6px;
      cursor: pointer;
}

button:hover{
  background-color: #23885b;
  transition: ease-out;
  transition-duration: 1s;
}
</style>
