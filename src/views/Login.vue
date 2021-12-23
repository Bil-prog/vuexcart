<template>
  <div class="form-wrap">
      <form class="login">
          <p class="login-register">
              Don't have an account?
              <router-link class="router-link" :to="{ name: 'Register' }">Register</router-link>
          </p>
          <p class="loginTitle">Login to SweetTooth</p>
          <div class="inputs">
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
          <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">
              Forgot your password?
          </router-link>
          <button id="btnLogin" @click.prevent="signIn">Sign In</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>  
</template>

<script>
export default {
name: "Login",
data(){
    return{
        email: "",
        password: "",
        error: null,
        errorMsg: "",
    };
},

}
</script>

<style>
.form-wrap{
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
}    
@media (min-width: 900px){
.form-wrap{
    width: 100%;
  }
}
.login-register{
  margin-bottom: 30px;
}
.router-link{
  color: #000;
}     
form{
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
} 
@media (min-width: 900px){
  .router-link{ 
    padding: 0 5px;
  }
}  
.loginTitle{
  text-align: center;
  font-size: 32px;
  color: deeppink;
  font-weight: 700;
  margin-bottom: 40px;
}
@media (min-width: 900px){
  .loginTitle{
      font-size: 40px;
    }
}
.inputs{
  width: 100%;
  max-width: 350px;
}
.input{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
.in{
  width: 100%;
  border: none;
  background-color: #FBE5C8;
  padding: 4px 4px 4px 30px;
  height: 50px;
}
.in:focus{
  outline: none;
}
.icon{
  width: 12px;
  position: absolute;
  left: 6px;
  color: #888;
}
.forgot-password{
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
}
.icon:hover{
  border-color: #303030;
}
.angle{
  display: none;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 60px;
  right: -30px;
  height: 101%;
}
@media (min-width: 900px){
  .angle{
    display: initial;
  }
}
.background{
  display: none;
  flex: 2;
  background-size: cover;
  background-image: url("../assets/abtBack.jpg");
  width: 100%;
  height: 100%;
}
@media (min-width: 900px){
  .background{
    display: initial;
    }
}
#btnLogin{
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 1px;
  padding: 12px 24px;
  background-color: deeppink;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
}
#btnLogin:focus{
  outline: none;
} 
#btnLogin:hover{
  background-color: #FFC2C7;
}
</style>