<template>

    <div class="slider-box"> 
      
      
      
      <div  v-for="(slide, index) in sliders"  :key="slide">

        <transition name="fade">
        <div  class="slides" v-if="currentSlide==index" :class="slide"></div>
        </transition>
      </div>

       <div class="parot" v-for="(slider , index) in sliders"  :key="slider">
              <div  class="parot-box"></div>
            
       </div>


      <!-- <div class="carousel">
        <transition name="fade">
          <h2 v-if="isTitleShowing">Slider Carousel</h2>
         </transition>
         <button  @click="isTitleShowing = !isTitleShowing">Toggle text</button>
     </div> -->
    </div>
    
</template>

<script>
export default {

    data(){
        return {
            title: 'Slider',
       currentSlide: 0,
       Interval: "",
       sliders:['slide-3','slide-2','slide-1'],
       isTitleShowing:true
        }
    },

    mounted(){
       this.Interval = setInterval(() => {
            if(this.currentSlide == 2){
                this.currentSlide =0;
            }else{
              this.currentSlide++;  
            }
           
        },1000);
    },

    beforeUnmount(){
        clearInterval(this.Interval);
    }


 
}
</script>

<style scoped>

  #pp{
      padding:0px !important;
      margin:0px !important;  
    
  }


.slider-box{
    display: flex;
    width:100%;
    position: relative;
   
 }
 /* .slider-box .carousel{
    padding-top:380px !important;
    
 } */

.flex-column{
    width:100%;
    display:flex;
    flex-direction:column;
    text-align:center;
}

.slides{
     width:1400px;
     height: 530px;
     position: absolute;
     padding:50px;
}
 .slide-1{
     background-color: blue;
}

  .slide-2{
     background-color: rgb(29, 228, 135);
 }
  .slide-3{
     background-color: rgb(230, 35, 762);
 }

 .fade-enter-active, .fade-leave-active{
     transition:all 1s ease;
     /* transition:opacity 0.5s ease; */
 }

 .fade-enter-from,
 .fade-leave-to{
   opacity: 0;
   transform: translateX(100%);

 }

  /* .fade-enter-from {
   opacity:0;
   transform:translateX(-100%);
  }
  
   .fade-leave-to{
   opacity:0;
   transform:translateX(100%);

 } */


 .parot{
     display:flex;
     position:absolute;
     bottom:0px;
     top:520px;
     justify-content:center;
     text-align:center;
     width:100%;
 }

 .parot-box{
     text-align:center;
     padding:20px;
     background-color:red;
     margin-left:10px;
     cursor:pointer;
 }
</style>