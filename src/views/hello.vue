<template>
    <div>
<ul>
    
    <input type="text" v-model="newItem" placeholder="Add an Item" @keyup.enter="saveItem">
    <button @click="saveItem"> Add Me </button>
    <li v-for="item in items" v-bind:key="item"> {{item}} </li>
</ul>
<p v-if="items.length ===0"> Hey ! You've got nothing ! Add New ! </p>
<p id="nothing"></p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newItem : "",
                items : []
            }
        },
        methods: {
            saveItem : function(){
                if (this.newItem.length > 0 ) {
                this.items.push(this.newItem);
                this.newItem = "";    
                }else{
                    document.getElementById('nothing').innerText = "Nothing to add !"
                }
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>