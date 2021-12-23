<template>
<footer>
    <div class="footer">
        <div style="margin-left: 20px;">
            <h4 class="fw-600">Sweet Tooth</h4>
        </div>
        <div class="about-us">
            <div>
                <router-link class="link" :to="{ name: 'About' }">About Us</router-link> |
                <router-link class="link" :to="{ name: 'Contact' }">Contact Us</router-link>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    min-height: 60px;
    background: #B6E5D8;
    display: flex;
    justify-content: space-between;
    padding-top: 17px;
}
.about-us{
    display: flex;
    width: 500px;
    justify-content: space-evenly;
}
.link{
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
 }  
 .link:hover{
    color: deeppink; 
 }
.fw-600{
    font-weight: 600;
}
</style>