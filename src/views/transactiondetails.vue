<template>
<div class="main">
  <navbar />
    <div class="container">
      <table style="width:100%">
           <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Sender's Account Number</th>
            <th>Reciever's Account Number</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Type</th>
        </tr>
        <tr v-for = 'res in results' :key="res.id">
      <td>{{res.user_id}}</td>
      <td>{{res.date}}</td>
      <td v-if= "res.myAccNo === null" >Null</td>
      <td v-else>{{res.myAccNo}}</td>
      <td v-if= "res.recipientAccNo === null" >Null</td>
      <td v-else>{{res.recipientAccNo}}</td>
      <td>{{res.amount}}</td>
      <td>{{res.status}}</td>
      <td>{{res.type}}</td>
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
  name: 'transactiondetails',
  components: {
    navbar: navbar,
    Footer: footer
  },
  data () {
    return {
      results: [],
      user_id: ''
    //   details: {
    //     userId: '',
    //     id: '',
    //     date: '',
    //     type: '',
    //     status: '',
    //     recepient_account_no: '',
    //     amount: ''
    //   }
    }
  },
  mounted () {
    this.user_id = localStorage.getItem('user_id')
    axios.get('http://10.177.68.42:8082/transaction/pastTransaction/' + this.user_id).then((result) => {
      console.log(result)
      localStorage.setItem('details', result.data)
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

<style scoped>
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
