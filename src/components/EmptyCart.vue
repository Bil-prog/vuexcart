<template>
  <div class="container mb-5 mt-5" style="text-align: center">
      <img src="../assets/cart02.png" width="250px" />
      <div class="mt-4">
          <h4 class="orange-red fw-600">Your cart is empty!</h4>
          <button @click="goToHome" id="empty">start shopping</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "EmptyCart",
    methods:{
        goToHome(){
            this.$router.push('/')
        },
    }
}
</script>

<style scoped>
.orange-red{
    color: #777;
}
.darkblue{
    color: darkblue;
}
.fw-600{
    font-weight: 600;
}
#empty{
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
#empty:focus{
  outline: none;
} 
#empty:hover{
  background-color: #FFC2C7;
}
</style>