<template>
      <div  id="app">
         <!-- <Calendar /> -->
         <markdown />

       
       
      </div>
</template>

<script>

// import Calendar from './components/Calendar.vue';
import Markdown from './components/markdown.vue';
export default {

  components: {
    // Calendar,
    Markdown
  
  }
  
}
</script>

<style scoped>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 
  #app{

    padding-top: 5rem;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


</style>
