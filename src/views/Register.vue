<template>
     <div class="form-wrap">
      <form class="register">
          <p class="login-register">
              Already have an account?
              <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
          </p>
          <p class="loginTitle">Create your SweetTooth Account</p>
          <div class="inputs">
              <div class="input">
                  <input class="in" type="text" placeholder="First Name" v-model="firstName" />
                  <i class="fa fa-user icon" aria-hidden="true"></i>
              </div>
              <div class="input">
                  <input class="in" type="text" placeholder="Last Name" v-model="lastName" />
                  <i class="fa fa-user icon" aria-hidden="true"></i>
              </div>
              <div class="input">
                  <input class="in" type="text" placeholder="Username" v-model="userName" />
                  <i class="fa fa-user icon" aria-hidden="true"></i>
              </div>
              <div class="input">
                  <input class="in" type="text" placeholder="Email" v-model="email" />
                  <i class="fa fa-envelope icon" aria-hidden="true"></i>
              </div>
              <div class="input">
                  <input class="in" type="password" placeholder="Password" v-model="password" />
                  <i class="fa fa-lock icon" aria-hidden="true"></i>
              </div>
              <div v-show="error" class="error">{{ this.errorMsg }}</div>
          </div>
          <button id="btnLogin" @click.prevent="register">Sign Up</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import firebase from "../firebase/firebaseInit.js";
//import "firebase/auth";
import  db  from '../firebase/firebaseInit.js';
export default {
name: "Register",
data(){
    return{
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        error: null,
        errorMsg: "",
    };
},
    methods: {
        async register(){
            if(
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.userName !== ""
            )
            {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    userName: this.userName,
                    email: this.email,
                });
                this.$router.push({ name: "Home"});
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all the fields!";
            return;
        },
    }
}
</script>

<style scoped>
.register h2{
  max-width: 350px;
}
.error{
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>