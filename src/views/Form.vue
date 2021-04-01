<template>
  <div>
    <form action="">
      <div>
        <h3>Sign Up Form</h3>
        <input type="text" placeholder="Username or Phone" required />
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Enter Password " required />
        <button>SignUp</button>
        <span>
          <input type="checkbox" class="inline" required /> Accept Our Terms and
          Conditions
        </span>
      </div>
    </form>

    <div id="app" class="container">
      <h2>Users List</h2>
      <div class="flex-container">
        <input
          type="text"
          @keyup.enter="addUser()"
          v-model="userText"
          placeholder="Add New User"
        />

        <button v-on:click="addUser()" class="btn btn-primary">
          Add To List
        </button>
      </div>

      <p>{{ characterCount }}/20</p>
      
        
      
      <ul class="list-unstyled">
        <li v-for="(user, index) in users" v-bind:key="index">
          <label>
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            {{ user.text }}
            
            <div class="rest-buttons">
            <button @click="editUser()" class="btn btn-primary">Edit</button>

        <button @click="saveUser()" class="btn btn-primary">Save</button>

        <button @click="removeUser()" class="btn btn-primary">
          Remove
        </button>
        <p v-if="users.length ===0"> No Users</p>
        </div>
          </label>
        </li>
      </ul>
      
    </div>
    <!-- <div class="users-conainer" >

    <h3>Add New Users</h3>
 <input type="text" v-model="newUser" @keyup.enter="addNew">
     <ul>
       <li v-for="(item, index) in usersList" :key="index"> <br></li>
     </ul>
     <button @click="deleteUser">Delete User</button>
</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userText: "",
      users: []
    };
  },
  computed: {
    characterCount() {
      return this.userText.length;
    },
    // usersList(){
    //     return this.List.push(item => item.name.map(this.newUser))
    // }
    //  usersList() {
    //     return this.usersList.push(input.value)
    //   }
  },
  methods: {
    //     addNew(){
    //         this.usersList.push(this.newUser)
    //     },

    //     usersList(){
    //     return this.List.push(item => item.name.push(this.newUser))
    // }

    // addUser() {
    //   var newUser = this.userText.trim();

    //   if(this.users.index == 0){
    //       return " No Users"
    //   }
    // //   if (!newUser) {
    // //     return;
    // //   }
    //   this.users.push({ text: newUser});
    //   this.userText = "";
    // },

    // removeUser(index) {
    //     // console.log(index)
    //   this.users.splice(index, 1);
    // },

    // addUser(){
    //     var newUser = this.userText.trim();
    //     this.users.push({text: newUser});
    //     this.userText = "";
    // },

    // addUser (){
    //     var newUser = this.userText.trim();
    //     this.users.push({text: newUser});
    //     this.userText = ""
    // },
    // removeUser(index){
    //     this.users.splice(index, 1)

    // }

    addUser() {
      if (this.userText.length > 1) {
        var newUser = this.userText.trim();
        this.users.push({ text: newUser });
        this.userText = "";
      } else {
        alert("No user !");
      }
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>





<style scoped>
form {
  margin: auto;
  border: seagreen 1px solid;
  width: 20%;
  height: 50vh;
  border-radius: 5px;
}
input {
  width: 80%;
  display: block;
  margin: auto;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  outline: none;
  border: 1px solid seagreen;
  color: seagreen;
}
button {
  width: 90%;
  display: block;
  margin: auto;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  outline: none;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  background-color: seagreen;
  margin-top: 2em;
}
input::placeholder {
  color: seagreen;
}
span {
  font-size: 11px;
}

.inline {
  display: flex;
  justify-content: center;
  color: seagreen;
  background-color: seagreen;
  border: seagreen 1px solid;
}

.container {
  border: seagreen 1px solid;
  padding: 4px;
  margin: 10px auto;
  width: 20%;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-container input {
  margin-top: 2em;
}

.flex-container button {
  width: 130px;
  height: 40px;
}
.btn-delete {
  display: inline;
}
.new-span {
  font-size: 20px;
}

.rest-buttons {
  display: flex;
  justify-content: space-evenly;
}

.rest-buttons button {
  width: 26%;
  height: 30px;
}
li {
  display: flex;
  flex-direction: column;
  /* background-color: teal; */
  list-style: none;
}
</style>