<template>
<div class="main">
  <div class="container">
    <label for="uname"><b>Email</b></label><br>
    <input type="email" placeholder="Enter Username" v-model="email" >
    <br>
    <label for="psw"><b>Password</b></label><br>
    <input type="password" placeholder="Enter Password" v-model="password">
    <div style="background-color:#f1f1f1">
    <button type="submit" class="submitbtn" @click="doLogin" >Submit</button>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    validate () {
      console.log('Hello I m stuck')
      if (this.email === '') {
        alert('Email cann\'t be Empty')
        return 0
      }
      if (this.password === '') {
        alert('Password cann\'t be Empty')
        return 0
      }
      return 1
    },
    doLogin () {
      console.log('Called')
      const obj = {
        email: this.email,
        password: this.password
      }
      if (this.validate()) {
        localStorage.setItem('email', this.email)
        this.$router.push('/welcome')
        console.log('Redirect')
        axios.post('http://10.177.68.51:8080/user/login', obj).then((result) => {
          console.log(result)
          localStorage.setItem('email', this.email)
        })
      }
    }
  }
}
</script>

<style scoped>
/* form {
 height:200px;
 width: 50%;
 margin-top:100px;
 background-color:white;
} */
/*
form {
 margin-top:250px;
 display: inline-block;
}
.position {
 margin: 50px;
 margin-bottom:5px;
}
.position2 {
 margin:50px;
 margin-top:5px;
 margin-right:70px;
}
form {
 height:200px;
 width: 40%;
 margin-top:100px;
 background-color:white;
 border:5px solid blue;
} */
/* .container {
 margin: auto;
 max-width: 500px;
 padding: 20px;
 background-color: white;
} */
form {
  text-align: center;
  border: 10px solid #f1f1f1;
  width: 50%;
  align-content: center;
  justify-content: center;
  margin-top:140px;
  margin-left:350px;
}
input[type=text], input[type=password],input[type=email] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button:hover {
  opacity: 0.6;
}
.submitbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.container {
  /* padding: 16px;
  text-align: center;
  border: 10px solid #f1f1f1;
  width: 50%;
  align-content: center;
  justify-content: center;
  margin-top:140px;
  margin-left:350px; */
  border: 10px solid #f1f1f1;
  width: 50%;
  align-content: center;
  justify-items: center;
  margin-top:140px;
  margin-left:350px;
  margin-bottom: 100px;
  padding: 16px;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

</style>
