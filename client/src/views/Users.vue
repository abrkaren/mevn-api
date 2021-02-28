<template>
  <div>
    <h2>Users list <span style="font-style: italic; color: #54a210">( /amount )</span></h2>

    <input type="number" v-model="amount" placeholder="amount" />
    <ul id="users-list">
      <li
        v-for="(user,index) in users"
        :key="user.email"

      >
          <p>{{ user.email }}</p>
          <p>Balance: {{ user.balance }}</p>

           <div class='btn-group'>
               <button :disabled='isDisabled' @click=createTransaction(user._id) class="btn-create-transaction">Add new transaction</button>
               <button @click=viewBalance(user._id) class="btn-balance">View Balance</button>
           </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users',
  data() {
     return {
         amount: null,
         users: [],
         loading: true,
         errored: false
     }
  },
  computed: {
        isDisabled: function(){
      	return !this.amount;
      }
  },
  mounted() {
      this.getUsers()
  },
  methods: {
      getUsers() {
          axios
             .get('http://localhost:4000/api/auth/getUsers')
             .then(response => (this.users = response.data))
             .catch(error => {
                  console.log(error);
                  this.errored = true;
             })
             .finally(() => (this.loading = false));
      },
      createTransaction(id) {
          axios.post(`http://localhost:4000/api/accountManagement/amount`, {
              account_id: id,
              amount: this.amount
          })
          .then(response => {
              console.log(response)
              this.amount = null;
              this.getUsers();
          })
      },
      viewBalance(id) {
          this.$router.push({path: 'balance/' + id});
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
          list-style: none;
          background: #ecf5ff;
          padding: 30px;
          border-radius:4px;
          margin: auto;
    }
    li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 14px;
          border-bottom: 1px dashed lightgray;
    }
    button {
        color: #fff;
        font-size: 14px;
        padding: 3px 6px;
        border-radius: 3px;
        border: none;
        outline: none;
        transition: .5s all;
        font-size: 13px;
        cursor: pointer;
    }
    button:disabled,
    button[disabled]{
        background-color: #cccccc;
        color: #666666;
    }
    input {
        border: 1px solid #d3d3d3;
        width: -webkit-fill-available;
        height: 28px;
        margin-bottom: 12px;
        padding-left: 4px;
        outline: none;
    }
    .btn-group {
        display: flex;
        flex-direction: column
    }
    .btn-create-transaction {
        margin-bottom: 4px;
        background: #2abb64;
    }
    .btn-create-transaction:hover {
        background: #26a659!important;
    }
    .btn-balance{
        background: #be920e;
    }
    .btn-balance:hover {
        background: #efbe2a;
    }
</style>
