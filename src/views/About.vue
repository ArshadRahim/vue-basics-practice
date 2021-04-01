<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p> {{ aboutPage() }} </p>

    <a :href="link">About Us</a>
  </div>
</template>
<script>
export default {
  data(){
    return{
      title: "Click here to learn more about Soundcloud community",
      link: "https://soundcloud.com/pages/contact"
    }
  },
  methods: {
    aboutPage () {
      return this.title
    }
  },
}
</script>
