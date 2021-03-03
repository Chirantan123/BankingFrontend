<template>
 <div>
  <div class="container">
    <div class="container1">
    <label for="fname"><b>First Name</b></label>
    <input type="text" id="name" placeholder="First Name" v-model="firstName" >
    <label for="lname"><b>Last Name</b></label>
    <input type="text" id="name" placeholder="Last Name" v-model="lastName" >
     </div>
    <label for="phone"><b>Phone Number</b></label>
    <input type="text" v-model="phone_no"  value="+91" size="2"/>
    <label for="address"><b>Address</b></label>
    <textarea cols="80" rows="5" value="address" v-model="address"></textarea>
    <label for="email"><b>Email</b></label>
    <input type="email" id="email" placeholder="E-mail" v-model="email">
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  v-model="password" required>
    <label for="psw"><b>Confirm Password</b></label>
    <input type="password" @keyup="mismatch" placeholder="Confirm Password" v-model="cpassword" required>
    <label for="pin"><b>Pin</b></label>
    <input type="text" id="pin" placeholder="Enter Secret Pin" v-model="pin" required>
    <div style="background-color:#f1f1f1">
    <button type="submit" class="submitbtn" @click="postData">Submit</button>
  </div>
  </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {

      firstName: '',
      lastName: '',
      phone_no: '',
      address: '',
      email: '',
      password: '',
      pin: '',
      cpassword: ''
    }
  },
  methods: {
    validate () {
      if (this.firstName === '') {
        alert('First Name cann\'t be Empty')
        return 0
      }
      if (this.lastName === '') {
        alert('Last Name cann\'t be Empty')
        return 0
      }
      if (this.email === '') {
        alert('Email cann\'t be Empty')
        return 0
      }
      if (isNaN(this.phoneNumber) || this.phoneNumber === '' || this.phoneNumber.length !== 10) {
        alert('Invalid Phone number, must be 10 digits')
        return 0
      }
      if (this.password === '' || (this.password.length < 8 || this.password.length > 16)) {
        alert('Invalid password, must be between than 8 to 16 characters')
        return 0
      }
      if (this.password !== this.cpassword) {
        alert('Password does not match')
        return 0
      }
      return 1
    },
    postData () {
      const obj = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        address: this.address,
        pin: this.pin
      }
      if (this.validate()) {
        axios.post('http://10.177.68.51:8080/user/register', obj).then((result) => {
          console.log(result)
          this.$router.push('/login')
        })
      }
    }
  }
}
</script>

<style scoped>
form {
  border: 10px solid #f1f1f1;
  width: 50%;
  align-content: center;
  justify-items: center;
  margin-top:140px;
  margin-left:350px;
  margin-bottom: 200px;
}
input[type=text], input[type=password],textarea, input[type=email] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
#name {
    width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button:hover {
  opacity: 0.8;
}
.submitbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.container {
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
.container1 {
  padding: 16px;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>
