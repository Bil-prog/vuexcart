<template>
  <div class="about">
    <Header/>
    <div class="first">

      <section class="slide01">
        <div class="text">
          <h3 id="text01">Our Aim</h3>
          <p id="para01">To give you satisfaction from our delicacies</p>
        </div>
        <div class="box">
          <div class="imgBx">
            <img src="../assets/About/abt1.jpg">
          </div>
        </div>
      </section>

      <div class="custom-shape-divider-bottom-1640099713">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
      </div>
    </div>


    <div class="second">
      <div class="us">
        <h2 class="titleText"><span>A</span>bout Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, vel velit non maxime quasi eveniet iste illum temporibus, maiores dolorum quod aspernatur debitis autem corporis fugit cum sint a quidem. 
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, est corporis. Tempora ab animi, at itaque voluptas sit odit dolorum odio vero incidunt labore quaerat deleniti? Reiciendis, accusamus natus! Quas.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, vero similique? Eius sequi nobis expedita amet laudantium vero quis soluta eveniet ex. Explicabo minima obcaecati qui hic vero fugiat debitis?</p>
      </div>
      <div class="custom-shape-divider-top-1640099839">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
    <div class="third">
      <div id="id02">
        <div class="text02">
          <p>Creativity, quality and freshness in every cake!</p>
        </div>
        <div class="box">
            <div class="imgBx">
              <img src="../assets/About/abt2.jpg">
            </div>
        </div>
        <div class="box">
            <div class="imgBx">
              <img src="../assets/About/abt3.jpg">
            </div>
        </div>
    </div>
    <br>
    <div id="id01">
      <div class="box">
            <div class="imgBx">
              <img src="../assets/About/abt4.jpg">
            </div>
        </div>
        <div class="box">
            <div class="imgBx">
              <img src="../assets/About/abt5.jpg">
            </div>
        </div>
        <div class="text02">
          <p>Amazingly textured and freshly baked in our slices.</p>
        </div>
    </div>
    </div>
  
  <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
name: "About",
components: {
  Header, Footer
}
}
</script>

<style scoped>
.first{
  position: relative;
  min-width: 1100px;
  min-height: 500px;
  display: flex;
  z-index: 1000;
  background: #B6E5D8;
  margin: 40px;
  border-radius: 20px;
}
.slide01{
  display: flex;
  justify-content: space-around !important;
}
.text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-left: 30px;
}
#para01{
  font-size: 20px;
}
.box{
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 330px;
    margin: 20px;
    margin-left: 100px;
    border: 15px solid #fff;
    border-radius: 12px;
    box-shadow: 0 5px 35px rgba(0,0,0,0.08);
}
.box .imgBx{
    position: relative;
    width: 100%;
    height: 300px;
}
.imgBx img{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.custom-shape-divider-bottom-1640099713 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1640099713 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1640099713 .shape-fill {
    fill: #FFFFFF;
}
.second{
  position: relative;
  min-width: 1100px;
  min-height: 500px;
  display: flex;
  z-index: 1000;
  background: #FBE5C8;
  margin: 40px;
  margin-bottom: 200px;
  border-radius: 20px;
}
.us{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}
.custom-shape-divider-top-1640099839 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1640099839 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1640099839 .shape-fill {
    fill: #FFFFFF;
}
.third{
  position: relative;
  min-width: 1100px;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  background: #FFC2C7;
  margin: 40px;
  border-radius: 20px;
  /* display: flex;
  align-items: center; */
}
.text02{
  font-size: 30px;
}
#id02{
  display: flex;
  align-items: center;
  justify-content: center;
}
#id01{
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1200px){
  .first{
    min-width: auto;
  }
  .second{
    min-width: auto;
  }
  .third{
    min-width: auto;
  }
  #id02{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  #id01{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
}
@media (max-width: 805px){
  .first{
    min-width: auto;
  }
  .slide01{
    display: flex;
    flex-direction: column;
    justify-content: flex-start !important;
    padding-top: 40px;
  }
  #para01{
  font-size: 16px;
  }
  .box{
    margin-top: 2px;
    width: 300px;
    height: 225px;
    border: 10px solid #fff;
  }
  .imgBx{
    height: 200px;
  }
  .second{
    min-width: auto;
  }
  .third{
    min-width: auto;
    min-height: 500px;
  }
  #id02{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  #id01{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  .text02{
  font-size: 20px;
  font-weight: 500;
  }
}
@media (max-width: 514px){
  /* .first{
    overflow: hidden;
  } */
  .box{
    width: 200px;
    height: 200px;
    border: 6px solid #fff;
    /*flex-direction: column;
    justify-content: flex-start !important;
    */
  }
  .imgBx{
    width: 188px;
    height: 188px;
  }
  .imgBx img{
    width: 188px;
    height: 188px;
  }
  .first .slide01 .text{
    margin-right: 20px;
  }
  .us{
    margin-top: 80px;
  }
  .us p{
    font-size: 13px;
  } 
}
</style>