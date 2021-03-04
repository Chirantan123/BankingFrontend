<template>
  <div>
      <navbar />
      <h1>Welcome to transfer page</h1>
        <div class="container">
        <label for="Amount">Amount</label>
        <input type='text' v-model='amount' id='Amount'>
        <label for="Sender">Sender Account No</label>
        <input type='text' v-model='senderAccount' id='SenderAccountNo'>
        <label for="Receiver">Receiver Account No</label>
        <input type='text' v-model='recipientAccount' id='ReceiverAccountNo'>
        <label for="Pin">Pin</label>
        <input type='password' v-model='pin' id='pin'>
        <button type="submit" class="submitbtn" @click="doTransfer">Transfer</button>
        </div>
        <Footer />
</div>
</template>

<script>
import axios from 'axios'
import navbar from '@/components/navbar.vue'
import footer from '@/components/footer.vue'
export default {
  name: 'transfer',
  data () {
    return {
      senderAccount: '',
      recipientAccount: '',
      pin: '',
      amount: '',
      results: [],
      user_id: ''
    }
  },
  components: {
    navbar: navbar,
    Footer: footer
  },
  methods: {
    validate (r) {
      console.log('Validate called')
      if (r.message === "Account Number doesn't exist") {
        return 0
      } else {
        return 1
      }
    },
    doTransfer () {
      const obj = {
        pin: this.pin,
        senderAccount: this.senderAccount,
        recipientAccount: this.recipientAccount,
        amount: this.amount
        // user_id: localStorage.getItem('user_id')
      }
      this.user_id = localStorage.getItem('user_id')
      if (this.senderAccount === this.recipientAccount) {
        console.log(true)
        alert('Transaction can only be done betweeen different user accounts')
        this.senderAccount = ''
        this.recipientAccount = ''
        // this.$router.push({ name: 'transfer' })
      } else {
        console.log(false)
        axios.put('http://10.177.68.42:8082/transaction/transfer/' + this.user_id, obj)
          .then((result) => {
            console.log(result)
            this.results = result.data
            // validation of result
            if (this.validate(result.data)) {
            // Show withdraw details,Success message and redirect to welcome page
              alert('Success')
              this.$router.push({ name: 'welcome' })
            } else {
              alert('Reenter Sender and Receiver Account No')
            // Show that the account no to which money is being transferred does not exist and stay in the same page
            }
            // this.$router.push({ name: 'Welcome' })
            // localStorage.setItem('email', this.posts.email)
          })
      }
    }
  }

}
</script>

<style>
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
