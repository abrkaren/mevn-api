<template>
  <div>
    <h2>Balance <span style="font-style: italic; color: #54a210">( ​/balance​/{account_id} )</span></h2>
    <div class="item" v-if="balance">
         <p>Balance: {{ balance }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Balance',
  data() {
      return {
          balance: null // current transaction
      }
  },
  mounted() {
      axios
          .get('http://localhost:4000/api/accountManagement/balance/' + this.$route.params.id)
          .then(response => (this.balance = response.data));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   select {
           max-width: 454px;
           border: 1px solid #d3d3d3;
           width: 100%;
           height: 28px;
           margin-bottom: 12px;
           padding-left: 4px;
           outline: none;
   }
   .item {
          max-width: 400px;
          background: #ecf5ff;
          padding: 30px;
          border-radius:4px;
          margin: auto;
   }
</style>
