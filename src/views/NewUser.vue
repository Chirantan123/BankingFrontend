<template>
      <div>
         <label for="FirstName">FirstName</label>
         <input class="position" type="text" id="Name" name="Name"><br><br>
         <label for="LastName">LastName</label>
         <input class="position" type="text" id="lastName" name="LastName"><br><br>
         <label for="Email">Email</label>
         <input class = "position1" type="text" id="Email" name="Email"><br><br>
         <label class="position" for="Password">Password</label>
         <input class="position2" type="password" id="Password" name="password"><br><br>
         <label class="position" for="Address">Address</label>
         <input class="position2" type="text" id="Address" name="Address"><br><br>
         <label class="position" for="Pin">Pin</label>
         <input class="position3" type="text" id="Pin" name="Pin"><br><br>
         <button class="button" type="button">Submit</button>
      </div>
</template>

<script>
export default {
  name: 'NewUser'
}
</script>
<style>
.position {
  margin-left:10px;
}
.position1 {
  margin-left:25px;
}
.position2 {
  margin-left:40px;
}
.position2 {
  margin-left:41px;
}
.button {
  margin-top:10px;
  margin-left:40px;
  background-color:blue;
}
</style>
