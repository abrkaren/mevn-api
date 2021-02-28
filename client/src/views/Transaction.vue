<template>
  <div>
    <h2>Transaction detail <span style="font-style: italic; color: #54a210">( /transaction/:id )</span></h2>
    <div class="item" v-if="transaction">
         <p>Amount: {{ transaction.amount }}</p>
         <p>account_id: {{ transaction.account_id }}</p>
         <p>Created: {{ transaction.created.slice(0, 10) }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name: 'Transaction',
      data() {
         return {
             transaction: null // current transaction
         }
      },
      mounted() {
        axios
           .get('http://localhost:4000/api/accountManagement/transaction/' + this.$route.params.id)
           .then(response => (this.transaction = response.data));

      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
          background: #ecf5ff;
          padding: 30px;
          border-radius:4px;
          margin: auto;
    }
</style>
