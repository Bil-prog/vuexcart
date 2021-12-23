<template>
  <div class="section">
    <div class="container">
      <div class="contactInfo">
        <div>
          <h2>Contact Info</h2>
          <ul class="info">
            <li>
              <span><img src="../assets/Icons/location.png"></span>
              <span>2912 Malindi Road<br>
              Kialimabo, Ms<br>
              90017</span>
            </li>
            <li>
              <span><img src="../assets/Icons/mail.png"></span>
              <span>lorem@ipsum.com</span>
            </li>
            <li>
              <span><img src="../assets/Icons/call.png"></span>
              <span>011-000-0000</span>
            </li>
          </ul>
        </div>

        <ul class="sci">
          <li><a href="#"><img src="../assets/Icons/1.png"></a></li>
          <li><a href="#"><img src="../assets/Icons/2.png"></a></li>
          <li><a href="#"><img src="../assets/Icons/3.png"></a></li>
          <li><a href="#"><img src="../assets/Icons/4.png"></a></li>
          <li><a href="#"><img src="../assets/Icons/5.png"></a></li>
        </ul>

      </div>
      <div class="contactForm">
        <h2>Send a Message</h2>
        <div class="formBox">
          <div class="names">
          <div class="inputBox w50">
            <input type="text" required>
            <span>First Name</span>
          </div>
          <div class="inputBox w50">
            <input type="text" required>
            <span>Last Name</span>
          </div>
          </div>
          <div class="names">
          <div class="inputBox w50">
            <input type="text" required>
            <span>Email Address</span>
          </div>
          <div class="inputBox w50">
            <input type="text" required>
            <span>Mobile Number</span>
          </div>
          </div>
          <div class="inputBox w100">
            <textarea required></textarea>
            <span>Write your message here...</span>
          </div>
          <div class="inputBox w100">
            <input type="submit" value="Send">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #8FDDE7;
}
.section::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #FFC2C7;
}
.container{
  position: relative;
  min-width: 1100px;
  min-height: 550px;
  display: flex;
  z-index: 1000;
}
.container .contactInfo{
  position: absolute;
  top: 40px;
  width: 350px;
  height: calc(100% - 80px);
  background: #8FDDE7;
  z-index: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 25px rgba(0,0,0,0.15);
}
.container .contactInfo h2{
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
.container .contactInfo ul.info{
  position: relative;
  margin: 20px 0;
}
.container .contactInfo ul.info li{
  position: relative;
  list-style: none;
  display: flex;
  margin: 20px 0;
  cursor: pointer;
  align-items: flex-start;
}
.container .contactInfo ul.info li span:nth-child(1){
  width: 30px;
  min-width: 30px;
}
.container .contactInfo ul.info li span:nth-child(1) img{
  max-width: 100%;
  filter: invert(1);
}
.container .contactInfo ul.info li span:nth-child(2){
  color: #fff;
  margin-left: 10px;
  font-weight: 300;
}
.container .contactInfo ul.sci{
  position: relative;
  display: flex;
}
.container .contactInfo ul.sci li{
  list-style: none;
  margin-right: 15px;
}
.container .contactInfo ul.sci li a{
  text-decoration: none;
}
.container .contactInfo ul.sci li a img{
  filter: invert(1);
}
.container .contactForm{
  position: absolute;
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 150px);
  height: 100%;
  background: #fff;
  box-shadow: 0 50px 50px rgba(0,0,0,0.25);
}
.container .contactForm h2{
  color: #095a55;
  font-size: 24px;
  font-weight: 500;
}
.container .contactForm .formBox{
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* flex-wrap: wrap; */
  padding-top: 30px;
}
.container .contactForm .formBox .names{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.container .contactForm .formBox .inputBox{
  position: relative;
  margin-bottom: 35px;
}
.container .contactForm .formBox .inputBox .w50{
  width: 50%;
}
.container .contactForm .formBox .inputBox .w100{
  width: 100%;
}
.container .contactForm .formBox .inputBox input,
.container .contactForm .formBox .inputBox textarea{
  width: 100%;
  resize: none;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 300;
  color: #333;
  border: none;
  outline: none;
  border-bottom: 1px solid #777;
}
.container .contactForm .formBox .inputBox textarea{
  height: 120px;
}
.container .contactForm .formBox .inputBox span{
  position: absolute;
  left: 0;
  padding: 5px 0;
  pointer-events: none;
  font-size: 18px;
  font-weight: 300;
  transition: 0.3s;
}
.container .contactForm .formBox .inputBox input:focus ~ span,
.container .contactForm .formBox .inputBox input:valid ~ span,
.container .contactForm .formBox .inputBox textarea:focus ~ span,
.container .contactForm .formBox .inputBox textarea:valid ~ span{
  transform: translateY(-20px);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #8FDDE7;
  font-weight: 500;
}
.container .contactForm .formBox .inputBox input[type="submit"]{
  position: relative;
  cursor: pointer;
  background: #8FDDE7;
  color: #fff;
  border: none;
  max-width: 150px;
  padding: 12px;
}
.container .contactForm .formBox .inputBox input[type="submit"]:hover{
  background: #0d948b;
}
@media (max-width: 1200px){
  .container{
    width: 90%;
    min-width: auto;
  }
  .container .contactInfo{
    top: 0 !important;
    height: 550px !important;
    position: relative;
    box-shadow: none !important;
  }
  .container .contactForm{
    position: relative;
    width: calc(100% - 350px);
    padding-left: 0;
    margin-left: 350px;
    padding: 40px;
    height: 550px;
    box-shadow: none;
  }
}
@media (max-width: 1200px){
  .section{
    background: #8FDDE7;
  }
  .section::before{
    display: none;
  }
  .contactInfo{
    box-shadow: 0 20px 50px rgba(0,0,0,0.2) !important;
  }
  .container{
    margin-top: 20px !important;
    display: flex;
    flex-direction: column-reverse;
  }
  .container .contactForm{
    width: 100%;
    height: auto;
    margin-left: 0px;
  }
  .container .contactInfo{
    width: 100%;
    height: 350px !important;
    display: flex;
    flex-direction: row !important;
  }
  .container .contactInfo ul.sci{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 600px){
.container .contactForm .formBox .names{
  display: flex;
  flex-direction: column !important;
  }
  .container .contactInfo{
    display: flex;
    flex-direction: column !important;
  }
}
</style>