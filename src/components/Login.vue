<template>
 
  <div class="login col-5">
    <form class="form-signin" @submit.prevent="login(dataLogin)">
      
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
        v-model="dataLogin.email"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="dataLogin.password"
        required
      />
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
        dataLogin:{
            email: '',
            password: '',
            remember_me: true
        }   
    }
  },
  methods: {
      ...mapActions(['login']),
    //   loginForm() {
    //   axios.post('http://127.0.0.1:8000/api/auth/login', 
    //     this.dataLogin
    //   )
    //     .then((response) => {
    //       console.log(response.data)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
      
    // },
  },
    
};
</script>

<style lang="scss">
      .login{
          margin-left: 20%;
          margin-top: 20px;
      }

</style>>

