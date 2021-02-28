<template>
  <div id="app">
    <div class="nav">
        <router-link :to="{path: `/`}">Home</router-link>
        <router-link :to="{path: `/users`}">Users</router-link>
        <router-link :to="{path: `/transactions`}">Transactions</router-link>
        <router-link :to="{path: `/maxTransactions`}">​Max Transaction</router-link>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
* {
    margin: 0;
    padding: 0;
}
p {
    margin: 14px 0;
}
h1, h2, h3, h4, h5, h6 {
    margin: 28px 0;
}
.content {
    max-width: 400px;
    margin: auto;
    width: 96%;
}
a {
    color: #000;
    text-decoration: none;
    background: #f0f0f0;
    padding: 8px 5px;
    margin: 0 2px;
    border-radius: 4px;
    font-size: 14px;
    transition: .5s all
}
a:hover {
    background: #ecf5ff;
}
.router-link-exact-active {
    background: #ecf5ff;
}
.nav {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #efefef;
    background-color: #fff;
    box-shadow: 0 1px 6px 1px rgb(0 0 0 / 6%);
}
@media (max-width: 576px) {
    li {
        flex-direction: column;
        padding-bottom: 12px!important;
    }
    p {
        margin: 8px 0;
    }
}
</style>
