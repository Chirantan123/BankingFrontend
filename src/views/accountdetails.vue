<template>
  <div cass="main">
      <navbar />
    <div class="container">
      <table style="width:100%">
              <tr>
            <th>Id</th>
            <th>Account Number</th>
            <th>Account Balance</th>
        </tr>
        <tr v-for = 'res in results' :key="res.id">
      <td>{{res.id}}</td>
      <td>{{res.accountNo}}</td>
      <td>{{res.accountBalance}}</td>
      </tr>
      </table>
      <Footer />
  </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footer from '@/components/footer.vue'
import axios from 'axios'
export default {
  name: 'accountdetails',
  data () {
    return {
      user_id: '',
      results: []
    }
  },
  components: {
    navbar: navbar,
    Footer: footer
  },
  mounted () {
    this.user_id = localStorage.getItem('user_id')
    axios.get('http://10.177.68.42:8082/account/' + this.user_id).then((result) => {
      console.log(result)
      console.log('success')
      //   localStorage.setItem('details', result.data)
      this.results = result.data
      //   this.details = JSON.parse(localStorage.getItem('details'))
      //   console.log('details fetched')
      //   console.log(this.details)
    })
      .catch((error) => {
        console.log(error)
      })
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
  color: black;
  background-color: silver;
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
