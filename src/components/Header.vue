<template>
 <header>
    <nav class="container"> 
          <div class="branding">
              <router-link class="header" :to="{ name: 'Home' }">SweetTooth</router-link>
          </div>
          <div class="nav-links">
              <ul v-show="!mobile">
                  <router-link class="link" :to="{ name: 'Shop' }">Shop</router-link>
                  <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link>
                  <i class="fa fa-shopping-cart cart-icon" @click="gotoCart"></i>
                  <span class="cart-count">{{count}}</span>
              </ul>
          </div>
      </nav>
      <div class="moBile" v-show="mobile">
      <i class="fa fa-shopping-cart cart-icon" @click="gotoCart"></i>
      <span class="cart-count">{{count}}</span>
      <i class="fa fa-bars menu-icon" aria-hidden="true" @click="toggleMobileNav" v-show="mobile"></i>
      </div>
      <!-- <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/> -->
      <transition name="mobile-nav">
          <ul class="mobile-nav" v-show="mobileNav">
              <h3 style="color: deeppink">Menu</h3>
            <router-link class="link" :to="{ name: 'About' }">About Us</router-link>
            <router-link class="link" :to="{ name: 'Shop' }">Shop</router-link>
            <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link>   
            <router-link class="link" :to="{ name: 'Contact' }">Contact Us</router-link>   
         </ul>
      </transition>  
     <!-- <div class="header">
      <div class="logo">
          <h4 class="sweet" @click="gotoHome">Sweet Dish</h4>
      </div>
      <div class="d-flex cart">
          <i class="fa fa-shopping-cart cart-icon" @click="gotoCart"></i>
          <span class="cart-count">{{count}}</span>
          <h5 class="login">Login</h5>
          <h5 class="register">Sign Up</h5>
      </div>
  </div> -->
 </header>
</template>

<script>
// import menuIcon from '../assets/Icons/bars-regular.svg';
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
        return {
            mobile: null,
            mobileNav: null,
            windownWidth: null,
        };
    },
  components: {
      //menuIcon
  },
  created(){
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
  methods: {
      gotoHome(){
            this.$router.push('/')
        },
        gotoCart(){
            this.$router.push('/Cart')
        },
        checkScreen() {
            this.windownWidth = window.innerWidth;
            if (this.windownWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
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
header {
    background-color: #fff;
    padding-top: 0px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
    height: 70px;
} 
.link{
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
 }  
 .link:hover{
    color: deeppink; 
 }
 nav {
    display: flex;
    padding: 12px 0;
 }
.branding{
    display: flex;
    align-items: center;
}  
.header{
    font-weight: 600;
    font-size: 24px;
    color: #000;
    text-decoration: none;
}   
.nav-links{
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
} 
.nav-links ul{
    margin-right: 32px;
}    

.nav-links ul .link{
    margin-right: 32px;
}

.nav-links ul .link:last-child{
    margin-right: 0;
}
.cart-count{
    font-size: 15px;
    color: deeppink;
    padding: 0 5px;
    margin-left: -10px;
    background: #fff;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #222;
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
    color: deeppink;
    cursor: pointer;
}
.menu-icon{
    cursor: pointer;
    /* position: absolute; */
    margin-left: 22px;
    line-height: 45px;
    width: auto;
} 
.moBile{
    position: absolute;
    display: flex;
    justify-content: center !important;
    top: 12px;
    right: 25px;
}
.mobile-nav{
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;   
}  
.mobile-nav .link{
    padding: 15px 0;
    color: #fff;
} 
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: all 1s ease;
}
.mobile-nav-enter{
    transform: translateX(-250px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
.mobile-nav-leave-to{
    transform: translateX(-250px);
}                                                  
/* .header{
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
} */
</style>
