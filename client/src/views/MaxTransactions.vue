<template>
  <div>
    <h2>Max Transaction <span style="font-style: italic; color: #54a210">( /max_transaction_volume )</span></h2>
     <ul id="max-transactions-list">
          <li
            v-for="(mTransaction,index) in maxTransactions"
          >
              <p>{{++index}}</p>
              <p>Account Id: {{ mTransaction._id.account_id }}</p>
              <p>Count: {{ mTransaction.count }}</p>
          </li>
     </ul>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name: 'MaxTransactions',
      data() {
         return {
             maxTransactions: null
         }
      },
      mounted() {
        axios
           .get('http://localhost:4000/api/accountManagement/max_transaction_volume')
           .then(response => (this.maxTransactions = response.data));
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
          list-style: none;
          max-width: 400px;
          background: #ecf5ff;
          padding: 30px;
          border-radius:4px;
          margin: auto;
    }
    li {
         display: flex;
         justify-content: space-between;
         align-items: center;
         border-bottom: 1px dashed lightgray;
    }
</style>
