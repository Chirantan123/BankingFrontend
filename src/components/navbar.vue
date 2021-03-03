<template>
<div>
    <nav class="navbar">
    <router-link class="links" to="/" tag="button">Home</router-link>
    <router-link class="links" to="/login" tag="button">Login</router-link>
    <router-link class="links" to="/register" tag="button">Register</router-link>
  </nav>
</div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    padding:0px;
    height: 70px;
    position:fixed;
    background-color:#8FC1E3;
    top:0;
    width: 100%;
}
.buttons:hover {
  background-color:#31708E; /* Green */
  color: white;
}
.buttons {
  border-radius: 12px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: black;
  display: inline-block;
  font-size: 16px;
  margin: 14px 12px;
  cursor: pointer;
}
.links {
  text-align: center;
  text-decoration:none ;
  color:black;
}
#b1{
  float:left;
  margin: 14px 102px;
  margin-left: 10px;
}
#b2{
  float: right;
  margin: 14px 10px;
}
#b3{
  float:right;
  margin: 14px 10px;
  margin-left: 452px;
}
</style>
