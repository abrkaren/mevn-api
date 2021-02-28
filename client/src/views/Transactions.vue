<template>
  <div>
    <h2>Transactions </h2>

    <select
      v-if="users"
      @change="onChange($event)"
      >
      <option disabled selected value="">Choose email</option>
      <option
          v-for="(user,index) in users"
          :key="user._id"
          >
            {{ user.email }}
          </option>
    </select>

        <ul id="transactions-list">
          <li
            v-for="(transaction,index) in transactions"
          >
              <p>{{++index}}</p>
              <p>Amount: {{ transaction.amount }}</p>
              <p>Created: {{ transaction.created.slice(0, 10) }}</p>
              <div>
                <button @click=goToDetail(transaction._id)>Detail</button>
              </div>
          </li>
        </ul>

  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name: 'Transactions',
      data() {
         return {
             users: [],
             transactions: []
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
          },
          onChange(e) {
              console.log(e.target.value)
                let currentUser
                this.users.forEach(item => {
                 if(item.email === e.target.value) {
                    currentUser = item._id
                 }
              })
                console.log(currentUser)
                axios
                    .post('http://localhost:4000/api/accountManagement/transactions', {
                        id: currentUser
                    })
                    .then(response => (this.transactions = response.data))
          },
          goToDetail(e) {
              this.$router.push({path: 'transaction/' + e});
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
         border-bottom: 1px dashed lightgray;
    }
    select {
        max-width: 454px;
        border: 1px solid #d3d3d3;
        width: 100%;
        height: 28px;
        margin-bottom: 12px;
        padding-left: 4px;
        outline: none;
    }
    button {
        background: #26aa5a;
        color: #fff;
        font-size: 14px;
        padding: 3px 6px;
        border-radius: 3px;
        border: none;
        outline: none;
        transition: .5s all;
        cursor: pointer;
    }
    button:hover {
        background: #1c7d43!important;
    }
</style>
