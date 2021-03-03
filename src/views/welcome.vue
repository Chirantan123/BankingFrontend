<template>
<div>
    <navbar />
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
<Footer />
</div>
</template>
<script>
// import axios from 'axios'
import navbar from '@/components/navbar.vue'
import footer from '@/components/footer.vue'
export default {
  data () {
    return {
      id: ''
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
</style>
