<template>
  <div class="users">
   
    <h4> Hi </h4>
     <h2>{{userPage() }}</h2>
     <p>first name: {{user.first_name}}</p>
     <p>last name: {{user.last_name}}</p>
     <p>full name: {{fullname}}</p>
     <input type="text" v-model="search">
     <ul>
       <li v-for="(item, index) in filteredList" :key="index">{{item.name}}</li>
     </ul>
     <button @click="userPage">click</button>
  </div>
</template>

<script>
export default {
    data(){

      return{
        search: '',
        username : "Gulbast",
        user: {
          first_name: 'ali',
          last_name: 'muhammad',
        },
        list: [
          {name: 'this is one', id: 1},
          {name: 'this is two', id: 2},
          {name: 'this is three', id: 3},
          {name: 'this is four', id: 4},
          {name: 'this is five', id: 5},
          {name: 'this is six', id: 6},
        ]
      }
    },
    computed: {
      fullname() {
        return `${this.user.first_name} ${this.user.last_name}`
      },
      filteredList() {
        return this.list.filter(item => item.name.includes(this.search))
      }
    },
    methods: {
      userPage(){
        this.username
      }
    },
}
</script>

<style scoped>
h4, h2 {
display: inline;
}
h4{
  color: #23885b;
  
}
</style>