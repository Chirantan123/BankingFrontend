<template>
     <div class="box">
         <img src="https://image.shutterstock.com/image-vector/online-banking-process-scheme-on-260nw-569170318.jpg" width="1200" height="600">
         <h1>Welcome to SBI ONLINE</h1>
       <router-link to="/" class="button" tag="button">Homepage</router-link>
       <router-link to="/Login" class="button1" tag="button">Login</router-link>
       <router-link to="/NewUser" class="button2" tag="button">NewUser</router-link>
     </div>
</template>

<script>
export default {

}
</script>

<style>
.box {
    position: static;
    text-align:center;
    height:150px;
    background-color:lightblue;
}
.button {
    position:static;
    margin-top:50px;
    margin-left:800px;
    background-color:blue;
}
.button1 {
    position:static;
    margin-top:5px;
    margin-left:10px;
    background-color:blue;
}
.button2 {
    position:static;
    margin-top:5px;
    margin-left:10px;
    background-color:blue;
}
</style>
