<template>
 <form>
 <label for="Name">Name</label>
 <input class='position' type="text" id="Name" name="Name"><br>
 <label class="position1" for="Password">Password</label>
 <input class="position2" type="text" id="Password" name="Password">
 </form>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
body {
 text-align: center;
 background-color:lightblue;
}
form {
 margin-top:100px;
 display: inline-block;
}
.position {
 margin:10px;
 display: inline-flex;
 flex-direction: row;
 margin-bottom:5px;
}
.position2 {
 margin:20px;
 margin-top:5px;
 display: inline-flex;
 flex-direction: row;
 margin-right:40px;
}
form {
 height:200px;
 width: 40%;
 background-color:white;
 border:5px lightblue;
}

</style>
