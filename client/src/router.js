import VueRouter from 'vue-router'

import Home from './views/Home'
import Users from './views/Users'
import Transactions from './views/Transactions'
import Transaction from './views/Transaction'
import Balance from './views/Balance'
import MaxTransactions from './views/MaxTransactions'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/users',
            component: Users
        },
        {
            path: '/transactions', component: Transactions
        },
        {
            path: '/transaction/:id', component: Transaction
        },
        {
            path: '/balance/:id', component: Balance
        },
        {
            path: '/maxTransactions', component: MaxTransactions
        },
        {
            path: '*', redirect: '/'
        }
    ]
})