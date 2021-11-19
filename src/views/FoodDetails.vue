<template>
<div class="d- flex foodDetails-outer">
    <Header />
    <div class="foodDetails">
        <div class="container mb-5">
            <h4 class="my-4 fw-600">Add Item to Cart</h4>
            <div class="row">
                <div class="col-md-4" style="cursor: pointer">
                    <img :src="details.url" width="300px" style="border-radius: 15px" />
                </div>
                <div class="col-md-4" style="cursor: pointer">
                    <h5 class="my-4 fw-600">Name: {{details.name}}</h5>
                    <h5 class="my-4 fw-600">Price: {{details.price}}</h5>
                    <h5 class="my-4 fw-600">Description: {{details.desc}}</h5>
                    <h5 class="my-4 fw-600">Rating: {{details.rate}}</h5>
                    <div>
                    <button class="btn btn-primary" @click="gotoCart">Go to Cart</button>
                    <button class="btn btn-success" @click="addToCart">Add Item</button>
                    <button class="btn btn-danger" @click="removeItem">Remove Item</button>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    <Footer />
</div>
</template> 

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
 name: 'FoodDetails',
  components: {
    Header, Footer
  },
    data() {
        return {
        details: this.$route.params.id
        }
    },
    methods: {
        gotoCart(){
                this.$router.push('/Cart')
        },
        addToCart(){
            this.$store.dispatch("addToCart", this.details)
        },
        removeItem(){
            this.$store.dispatch("removeItem", this.details)
        }
    },
    created() {
        if (this.$route.params.id != undefined)
        localStorage.setItem("details", JSON.stringify(this.$route.params))
    },
    mounted() {
        this.details = JSON.parse(localStorage.getItem("details"));
    }
}
</script>

<style scoped>
.foodDetails-outer{
    flex-direction: column;
    height: 100vh;
}
.foodDetails{
    background: #efe9e2;
    flex: 1;
    overflow-y: auto;
}
.fw-600{
    font-weight: 600;
}
</style>