<template>
<div>
    <navbar />
    <div class="msg">
    <h1>Welcome </h1>
    <h1>{{id}}</h1>
    </div>
 <div class="flex-container">
 <div>
 <button v-on:click="deposit">Deposit</button>
 </div>
 <div>
 <button  v-on:click="transfer">Tranfer</button>
 </div>
 <div>
 <button  v-on:click="withdrawal">Withdraw</button>
 </div>
 <div>
 <button  v-on:click="past_transaction">Past Transactions</button>
 </div>
 <div>
 <button  v-on:click="account">Account Details</button>
 </div>
</div>
<button class="submitbtn" v-on:click="createAccount">Create an Account</button>
<Footer />
</div>
</template>
<script>
// import axios from 'axios'
import navbar from '@/components/navbar.vue'
import footer from '@/components/footer.vue'
import axios from 'axios'
export default {
  name: 'welcome',
  data () {
    return {
      id: '',
      uname: '',
      pin: ''
    }
  },
  components: {
    navbar: navbar,
    Footer: footer
  },
  mounted () {
    this.id = localStorage.getItem('user_id')
    // this.email = localStorage.getItem('email')
    // axios.get('http://10.177.68.51:9090/login-as-admin ', ob)
    // .then((res) => {
    // this.id = res.data.email
    // })
    console.log(this.id)
  },
  methods: {
    deposit () {
      this.$router.push('/deposit')
    },
    transfer () {
      this.$router.push('/transfer')
    },
    withdrawal () {
      this.$router.push('/withdraw')
    },
    past_transaction () {
      this.$router.push('/transactiondetails')
    },
    account () {
      this.$router.push('/accountdetails')
    },
    createAccount () {
      this.pin = prompt('Please Enter your Pin')
      parseInt(this.pin)
      axios.get('http://10.177.68.42:8082/account/createAccount' + this.user_id, this.pin).then((result) => {
        console.log(result)
        //   localStorage.setItem('details', result.data)
        this.results = result.data
        alert('Account has been created' + '\n' + 'CurrentBalance' + this.results.accountBalance)
      //   this.details = JSON.parse(localStorage.getItem('details'))
      //   console.log('details fetched')
      //   console.log(this.details)
      })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style>
.flex-container {
    margin-top:40px;
 display: flex;
 flex-direction: row;
 max-height:500px;
 background-color: #31708E;
}
.flex-container > div {
 background-color: #f1f1f1;
 height:300px;
 width:300px;
 margin: 30px;
 margin-bottom:30px;
 padding: 30px;
 font-size: 30px;
}
.msg {
    margin-top:75px;
    color:whitesmoke;
    height:100px;
    display:flex;
    align-content: center;
}
 .submitbtn {
  width: auto;
  padding: 10px 18px;
  background-color: black;
}
</style>
