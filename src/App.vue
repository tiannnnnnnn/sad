<template>
  <div id="app">
    
    <div>

      <el-button class="button1">Posts RSS</el-button>
      <el-button class="button2">Facebook</el-button>
      <el-button class="button3">Twitter</el-button>
      <el-button class="button4">Mail me</el-button>
      <el-button class="button5">login</el-button>
      
      <div class=circle1></div>
      <div class=circle2></div>
      <div class=circle3></div>


      <div class=circleee1></div>
      <div class=circleee2></div>
      <div class=circleee3></div>
      <div class=circleee4></div>
      <div class=circleee5></div>
      <div class=circleee6></div>
      <div class=circleee7></div>
      <div class=circleee8></div>
      <div class=circleee9></div>
      
      <div class=search>  </div>
      <div class=searchri><p9>Search</p9></div>
      

      <div class=message></div>
      <div class=messageee><p10>訊息類別</p10></div>

      <div class=act></div>
      <div class=acttt><p20>近期活動</p20></div>

       <div class=website><p21>相關網站</p21></div>

      <div class=img1><img src="http://art.nthu.edu.tw/-artimg/web_artdesign.jpg" height=180px width=180px></div>
      <div class=img2><img src="http://art.nthu.edu.tw/-artimg/web_music.jpg" height=180px width=180px></div>
      <div class=img3><img src="http://art.nthu.edu.tw/-artimg/web_ipta.jpg" height=180px width=180px></div>
      <div class=img4><img src="http://art.nthu.edu.tw/-artimg/web_aet.jpg" height=180px width=180px></div>
      <div class=img5><img src="http://art.nthu.edu.tw/-artimg/web_artspeech.jpg" height=180px width=180px></div>
      <div class=img6><img src="http://art.nthu.edu.tw/-artimg/web_techart.jpg" height=180px width=180px></div>

      <p1>清華大學</p1>
      <p2>藝術學院</p2>
      <p3>院學士班</p3>
      <p4>藝設系</p4>
      <p5>音樂系</p5>
      <p6>一起來開創清華科技藝術跨域DNA</p6>
      <p7>一起來把美感、創意帶入清華生活</p7>
      <p8>一起在清華創造音樂心靈饗宴</p8>

      <p11>關於學院</p11>
      <p12>學院師資</p12>
      <p13>學院規章</p13>
      <p14>招生訊息</p14>
      <p15>榮譽榜</p15>
      <p16>活動花絮</p16>
      <p17>藝院影音</p17>
      <p18>藝術學報</p18>
      <p19>聯絡資訊 </p19>
      
      <el-calendar class="cal" ></el-calendar>

      <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 8" :key="item">
      <h3>{{item = 1}} <img src="http://art.nthu.edu.tw/wp-content/uploads/2019/11/2019-1219_forum-1.jpg" height=1200px width=1000px></h3>
      </el-carousel-item>
      </el-carousel>

    </div>

  </div>

</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.img1 img{
   position: absolute;
   top: 2000px;
   left: 60px;
}
.img2 img{
   position: absolute;
   top: 2000px;
   left: 280px;
}
.img3 img{
   position: absolute;
   top: 2000px;
   left: 500px;
}
.img4 img{
   position: absolute;
   top: 2000px;
   left: 720px;
}
.img5 img{
   position: absolute;
   top: 2000px;
   left: 940px;
}
.img6 img{
   position: absolute;
   top: 2000px;
   left: 1160px;
}

.cal{
   height: 80px;
   width: 650px;
   position: absolute;
   top: 2450px;
   left: 400px;

}

.search{
   height: 60px;
   width: 1170px;
   background-color: #e6e6e6 ;
   position: absolute;
   top: 2350px;
   left: 130px;
}
.searchri{
   height: 60px;
   width: 150px;
   background-color: #e0a5a5 ;
   position: absolute;
   top: 2350px;
   left: 1150px;
}

.message{
   height: 570px;
   width: 220px;
   background-color: #e6e6e6 ;
   position: absolute;
   top: 2480px;
   left: 120px;
}
.messageee{
   height: 65px;
   width: 220px;
   background-color: #858585 ;
   position: absolute;
   top: 2480px;
   left: 120px;
}
.act{
   height: 600px;
   width: 220px;
   background-color: #e6e6e6 ;
   position: absolute;
   top: 2480px;
   left: 1095px;
}
.acttt{
   height: 65px;
   width: 220px;
   background-color: #858585 ;
   position: absolute;
   top: 2480px;
   left: 1095px;
}

.website{
   height: 45px;
   width: 180px;
   background-color: #e6e6e6 ;
   position: absolute;
   top: 1920px;
   left: 60px;
}


p1{
  position: absolute;
   top: 230px;
   left: 580px;
  font-size: 35px;
  letter-spacing:45px
}
p2{
  position: absolute;
   top: 280px;
   left: 580px;
  font-size: 48px;
  letter-spacing:30px
}
p3{
   position: absolute;
   top: 530px;
   left: 280px;
   font-size: 30px;
   letter-spacing:20px;
   z-index: 2;
}
p4{
   position: absolute;
   top: 530px;
   left: 657px;
   font-size: 30px;
   letter-spacing:20px;
   z-index: 2;
}
p5{
   position: absolute;
   top: 530px;
   left: 1008px;
   font-size: 30px;
   letter-spacing:20px;
   z-index: 2;
}
p6{
   position: absolute;
   top: 590px;
   left: 235px;
   font-size: 12px;
   letter-spacing:6px;
   z-index: 2;
}
p7{
   position: absolute;
   top: 590px;
   left: 592px;
   font-size: 12px;
   letter-spacing:6px;
   z-index: 2;
}
p8{
   position: absolute;
   top: 590px;
   left: 950px;
   font-size: 12px;
   letter-spacing:6px;
   z-index: 2;
}

p9{
   position: absolute;
   top: 13px;
   left: 17px;
   font-size: 23px;
   letter-spacing:10px
}
p10{
   position: absolute;
   top: 13px;
   left: 45px;
   font-size: 23px;
   letter-spacing:10px;
   color: #ffffff ;
}

p11{
   position: absolute;
   top: 1415px;
   left: 105px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}
p12{
   position: absolute;
   top: 1415px;
   left: 375px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}
p13{
   position: absolute;
   top: 1415px;
   left: 645px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}
p14{
   position: absolute;
   top: 1415px;
   left: 915px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}
p15{
   position: absolute;
   top: 1415px;
   left: 1205px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}
p16{
   position: absolute;
   top: 1715px;
   left: 240px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}
p17{
   position: absolute;
   top: 1715px;
   left: 510px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff;
   z-index: 2;
}
p18{
   position: absolute;
   top: 1715px;
   left: 780px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}
p19{
   position: absolute;
   top: 1715px;
   left: 1050px;
   font-size: 26px;
   letter-spacing:13px;
   color: #ffffff ;
   z-index: 2;
}

p20{
   position: absolute;
   top: 13px;
   left: 45px;
   font-size: 23px;
   letter-spacing:10px;
   color: #ffffff ;
}

p21{
    position: absolute;
   top: 8px;
   left: 28px;
   font-size: 20px;
   letter-spacing:15px;
}


.circle1 {
   height: 200px;
   width: 200px;
   position: absolute;
   top: 480px;
   left: 270px;
   border-radius: 100px;
   background-color: rgb(235, 244, 255);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}

.circle2 {
   height: 200px;
   width: 200px;
   position: absolute;
   top: 480px;
   left: 620px;
   border-radius: 100px;
   background-color: rgb(255, 240, 244);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circle3 {
   height: 200px;
   width: 200px;
   position: absolute;
   top: 480px;
   left: 970px;
   border-radius: 100px;
   background-color: rgb(255, 247, 232);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}

.circleee1:hover{
   position: absolute;
   top: 1400px;
   left: 88px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee2:hover{
   position: absolute;
   top: 1400px;
   left: 358px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee3:hover{
   position: absolute;
   top: 1400px;
   left: 628px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee4:hover{
   position: absolute;
   top: 1400px;
   left: 898px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee5:hover{
   position: absolute;
   top: 1400px;
   left: 1168px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee6:hover{
   position: absolute;
   top: 1700px;
   left: 223px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee7:hover{
   position: absolute;
   top: 1700px;
   left: 493px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee8:hover{
   position: absolute;
   top: 1700px;
   left: 763px;
   height: 200px;
   width: 175px;
   border-radius:0px ;
   background-color: rgb(201, 201, 201);
}
.circleee1 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1350px;
   left: 88px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee2 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1350px;
   left: 358px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee3 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1350px;
   left: 628px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee4 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1350px;
   left: 898px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee5 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1350px;
   left: 1168px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee6 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1650px;
   left: 223px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee7 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1650px;
   left: 493px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee8 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1650px;
   left: 763px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}
.circleee9 {
   height: 175px;
   width: 175px;
   position: absolute;
   top: 1650px;
   left: 1033px;
   border-radius: 100px;
   background-color: rgb(143, 143, 143);
   box-shadow:0px 0px 5px rgb(255, 255, 255);
   z-index: 1;
}

.button1 {

   position: absolute;
   top: 4px;
   left: 913px;

}
.button2 {

   position: absolute;
   top: 4px;
   left: 1020px;

}
.button3 {

   position: absolute;
   top: 4px;
   left: 1133px;

}
.button4 {

   position: absolute;
   top: 4px;
   left: 1230px;

}
.button5 {

   position: absolute;
   top: 4px;
   left: 1330px;

}

   .el-carousel{
      height: 1600px;
      width: 1000px;
      position: absolute;
      top: 800px;
      left: 212px;
   }
   .el-carousel__item h3 {
   color: #475669;
   font-size: 18px;
   opacity: 0.75;
   line-height: 300px;
   margin: 0;
  }

  .el-carousel__item img{
   position: absolute;
   top: -40px;
   left: 0px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
