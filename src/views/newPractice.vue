<template>
    <div>
        <input type="text" v-model="addUser" @keyup.enter="addNewUser">
        <ul>
            <li ></li>
        </ul>

        <div id="shopping-list">
            <input type="text " v-model="header">
            <h1> {{header}} </h1>

<input type="text" name="" id="" v-model="message" placeholder="Edit Me">
<p> Message is : {{message}}</p>



<span>Multiple line message</span>
<p> {{heymessage}} </p>
<textarea name="" id="" cols="30" rows="10" placeholder="add multiple lines" v-model="heymessage"></textarea>
        </div>

        <input type="checkbox" v-model="checked">
        <label for="checkbox" aria-placeholder="Not checked" > {{checked}} </label>
    </div>
</template>

<script>
export default {
    el:"#shopping-list",
    data(){
        return{
            users : [],
            addUser : "",
            header:"Vue is ready to party ! ",
            message : "Hey",
            heymessage : '',
            checked : false 
        }
    },
     methods: {
         addNewUser(){
             
         }
     },
}
</script>