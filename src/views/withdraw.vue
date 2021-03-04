<template>
<div class="main">
    <navbar />
 <h1>Welcome to withdraw page</h1>
 <div class="container">
 <label for="Amount">Amount</label>
 <input type='text' v-model='amount' id='Amount'>
 <label for="To">Account No</label>
 <input type='text' v-model='accountNo' id='AccountNo'>
 <label for="From">Pin</label>
 <input type='password' v-model='pin' id='password'>
 <button type="submit" class="submitbtn" @click="doWithdraw">withdraw</button>
 </div>
 <Footer />
</div>
</template>

<script>
import axios from 'axios'
import footer from '@/components/footer.vue'
import navbar from '@/components/navbar.vue'
export default {
  name: 'withdraw',
  data () {
    return {
      pin: '',
      accountNo: '',
      amount: '',
      user_id: '',
      results: []
    }
  },
  components: {
    navbar: navbar,
    Footer: footer
  },
  methods: {
    validate (r) {
      console.log(r)
      console.log('Validate called')
      if (r.message === "Account Number doesn't Exist" || r.message === 'InSufficient Balance' || r.message === 'Invalid input for withdrawal amount!') {
        console.log(r.message)
        return r.message
      } else {
        return 'Success'
      }
    },
    doWithdraw () {
      const obj = {
        pin: this.pin,
        accountNo: this.accountNo,
        amount: this.amount
      }
      this.user_id = localStorage.getItem('user_id')
      axios.put('http://10.177.68.42:8082/account/withdraw/' + this.user_id, obj)
        .then((result) => {
          console.log(result)
          this.results = result.data
          // validation of result
          alert(this.validate(this.results))
          console.log(this.validate(this.results))
          // Show withdraw details,Success message and redirect to welcome page
          this.$router.push('/welcome')
          // Show that the account no to which money is being transferred does not exist and stay in the same page

          // this.$router.push({ name: 'Welcome' })
          // localStorage.setItem('email', this.posts.email)
        })
        .catch(e => console.log(e))
    }
  }
}
</script>
<style>
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
  color:red;
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
</style>
