<template>
  <div>
    <h2>Home page <span style="font-style: italic; color: #54a210">{ /ping }</span></h2>
    <p style="color: orange; font-size: 20px; text-decoration: underline;">{{ healthCheckMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name: 'Home',
      data() {
         return {
             healthCheckMessage: null // message from backend
         }
      },
      mounted() {
        axios
           .get('http://localhost:4000/api/accountManagement/ping')
           .then(response => (this.healthCheckMessage = response.data));
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
