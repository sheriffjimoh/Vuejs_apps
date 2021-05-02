<template>
      <div  id="app">
         <!-- <Calendar /> -->
         <!-- <markdown /> -->
           <!-- <slider /> -->
           <LoginModal />

       
       
      </div>
</template>

<script>

// import Calendar from './components/Calendar.vue';
// import Markdown from './components/markdown.vue';
// import Slider from './components/Slider.vue';
// import firebase from './utilities/firebase';
import LoginModal from './components/LoginModal.vue';
export default {

  components: {
    // Calendar,
    // Markdow,
    // Slider
    LoginModal,
   
   
   },
    data(){

      return{
      
      }
    },
  
 


  
}
</script>

<style scoped>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 
  #app{

    /* padding-top: 5rem; */
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


</style>
