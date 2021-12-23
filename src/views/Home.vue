<template>
  <div class="wrapper">
    <Header />
    <div class="content"> 
      <div class="container mb-5">

        <h4 class="my-4 fw-600 d-blue">Cakes</h4>
        <div class="row">
              <div
                  v-on:click="foodDeets(items)" 
                  v-for="items in cakes" 
                  :key="items.id" 
                  class="col-md-4 pointer">
                <img :src="items.url" width="300px" height="300px" style="border-radius: 15px;">
                <h5 class="fw-600 black">{{items.name}}</h5>
              </div>
        </div>
        <!-- -->

        <h4 class="my-4 fw-600 d-blue">All Categories</h4>
        <div class="row">
              <div 
                    v-on:click="foodDeets(items)" 
                    v-for="items in allCategories" 
                    :key="items.id" 
                    class="col-md-4 pointer">
                <img :src="items.url" width="300px" height="300px" style="border-radius: 15px;">
                <h5 class="fw-600 black">{{items.name}}</h5>
              </div>
        </div>
        <!-- -->
        
        <h4 class="my-4 fw-600 d-blue">Dishes Near You</h4>
        <div class="row">
                <div 
                            v-on:click="foodDeets(items)" 
                            v-for="items in dishesNearYou" 
                            :key="items.id" 
                            class="col-md-4 pointer">
                  <img :src="items.url" width="300px" height="300px" style="border-radius: 15px;">
                  <h5 class="fw-600 black">{{items.name}}</h5>
                </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Header, Footer
  },

  methods: {
    foodDeets(item){
      this.$router.push({ name: "FoodDetails", params: item});
    }
  },

  computed: {
    cakes(){
      return this.$store.state.cakes;
    },
    allCategories(){
      return this.$store.state.allCategories;
    },
    dishesNearYou(){
      return this.$store.state.dishesNearYou;
    }, 
  }
}
</script>
<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}
.fw-600{
  font-weight: 600;
}
.pointer{
  cursor: pointer;
}
</style>
