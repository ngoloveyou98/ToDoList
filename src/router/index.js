import SignUp from '../components/SignUp.vue'
import Home from '../components/view/Home.vue'
import Login from '../components/Login.vue'
export const routes =[
    {
        path: '/', 
        name: 'home', 
        component: Home 
    },
    {
        path: '/sigup', 
        name: 'signup', 
        component: SignUp 
    },
    {
        path: '/login', 
        name: 'login', 
        component: Login 
    }
];