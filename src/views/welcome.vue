<template>
<div>
    <div class="msg">
    <h1>Welcome</h1>
    <h1>{{email}}</h1>
    </div>
 <div class="flex-container">
 <div>
 <button>Deposit</button>
 </div>
 <div>
 <button>Tranfer</button>
 </div>
 <div>
 <button>Transaction</button>
 </div>
 <div>
 <button>Past Transactions</button>
 </div>
 <div>
 <button>Admin</button>
 </div>
</div>
</div>
</template>
<script>
// import axios from 'axios'
export default {
  data () {
    return {
      email: ' '
    }
  },
  mounted () {
    // const ob = {
    // this.email: localStorage.getItem('email')
    // }
    this.email = localStorage.getItem('email')
    // axios.get('http://10.177.68.51:9090/login-as-admin ', ob)
    // .then((res) => {
    // this.id = res.data.email
    // })
  }
}
</script>
<style>
.flex-container {
    margin-top:100px;
 display: flex;
 flex-direction: row;
 max-height:600px;
 background-color: DodgerBlue;
}
.flex-container > div {
 background-color: #f1f1f1;
 height:300px;
 width:400px;
 margin: 10px;
 margin-bottom:10px;
 padding: 20px;
 font-size: 30px;
}
.msg {
    margin-top:75px;
    color:whitesmoke;
    height:100px;
    display:flex;
    align-content: center;
}
</style>
