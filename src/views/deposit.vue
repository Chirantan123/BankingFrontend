<template>
    <div class="main">
        <navbar />
        <h1>Welcome to deposit page</h1>
        <div class="container">
        <label for="Amount">Amount</label>
        <input type='text' v-model='amount' id='Amount'>
        <label for="To">Account No</label>
        <input type='text' v-model='accountNo' id='AccountNo'>
        <label for="From">Pin</label>
        <input type='password' v-model='pin' id='FromAccountNo'>
        <button type="submit" class="submitbtn" @click="doDeposit">Deposit</button>
        </div>
        <Footer />
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footer from '@/components/footer.vue'
import axios from 'axios'
export default {
  name: 'deposit',
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
    doDeposit () {
      const obj = {
        pin: this.pin,
        accountNo: this.accountNo,
        amount: this.amount
        // user_id: localStorage.getItem('user_id')
      }
      this.user_id = localStorage.getItem('user_id')
      axios.put('http://10.177.68.42:8082/transaction/deposit/' + this.user_id, obj)
        .then((result) => {
          console.log(result)
          this.results = result.data
          alert('Your current Balance is :' + this.results.currentBalance)
          this.$router.push({ name: 'welcome' })
          // localStorage.setItem('email', this.posts.email)
        })
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
}
</style>
