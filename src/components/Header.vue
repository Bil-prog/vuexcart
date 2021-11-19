<template>
 <header>
     <div class="header">
      <div class="logo">
          <h4 class="sweet" @click="gotoHome">Sweet Dish</h4>
      </div>
      <div class="d-flex cart">
          <i class="fa fa-shopping-cart cart-icon" @click="gotoCart"></i>
          <span class="cart-count">{{count}}</span>
          <h5 class="login">Login</h5>
          <h5 class="register">Sign Up</h5>
      </div>
  </div>
 </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
      gotoHome(){
            this.$router.push('/')
        },
        gotoCart(){
            this.$router.push('/Cart')
        },
  },
  computed: {
        count(){
            return this.$store.state.cartItemCount
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    height: 60px;
    background: lightgray;
    display: flex;
    justify-content: space-between;
}
.logo{
    display: flex;
    margin-left: 15px;
    padding: 6px;
    cursor: pointer;
}
.sweet{
    color: deeppink;
    font-weight: 600;
    margin-top: 7px;
}
.cart-count{
    font-size: 15px;
    color: #d4570cf2;
    padding: 0 5px;
    margin-left: -35px;
    background: #fff;
    height: 20px;
    border-radius: 50%;
    width: 20px;
}
.cart{
    width: 300px;
    justify-content: space-evenly;
    padding-top: 3px;
}
.cart-icon{
    line-height: 45px;
    font-size: 24px;
    color: #2aa5a0;
    cursor: pointer;
}
.login, .register{
    font-weight: 600;
    margin-top: 10px;
}
</style>
