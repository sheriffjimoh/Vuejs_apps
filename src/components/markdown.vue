<template>

  <!-- # let's start with an header text
         <h1>Follow by h1 text</h1>
         <h2>Follow by h2 text</h2>
         <h3>Follow by h3 text</h3>
         <h4>Follow by h4 text</h4>
         <h5>Follow by h5 text</h5>
         <h6>Follow  by h6  text </h6>
         **boldText**
         *italicText*
         <strike>StrikeText</strike> -->
         <!--using marked npm package   -->

        <div class="datas">
            <h1>Markdown  App</h1>
          <p>Using <a href="https://www.npmjs.com/package/marked" target="_">marked</a> ,  npm package </p>
            <section class="section">
                    <article class="left">
                      <textarea name="text-box" id="text-box" cols="30" rows="10" @input="update"></textarea>
                    </article>
                    <article class="right">
                        <div v-html="markedText">
                       
                        </div>
                       
                    </article>
            </section>

        </div>
</template>



<script>

import marked from "marked";
import debounce from "../utilities/mixins/debounce";
export default {

    // beforeCreate(){
    //  console.log("before create");
    // },

    // created(){
    //  console.log("created");
    // },
    // beforeMount(){
    //     console.log("before mount");
    // },
    // mounted(){
    //     console.log("mounted");
    // },

    // beforeUpdate(){
    //     console.log('before update');
    // },

    // onUpdated(){
    //     console.log('on updated');
    // },
    // onBeforeUnmount(){
    //  console.log("before mount");   
    // },

// using mixins
   mixins:[debounce],
    data(){
        return{
            text: " ",
            
        }
    },
    computed:{
        markedText(){
            return marked(this.text);
        }
    },


    methods:{
        update(e){
            const task = () => (this.text = e.target.value);
            this.debounce(task, 500);
        },
    }

   
}
</script>
<style scoped>

.datas{
    width: 100%;
    padding:5px; 
    text-align: center;
  }
  

  .datas h1{
   
    padding: 10px;
  }

  section {
    display: flex;
    flex-direction: row;
   flex-basis: 100%;
  }


 @media (max-width:999px){
   section {
    display: flex;
    flex-direction:column;
    /* display: none; */
  }

  .left textarea{
    
    height:200px !important;
    
  }

 }

  
  .left{
     flex-basis: 50%;
      
  }

  .left textarea{
      width: 100%;
      flex-basis:100%;
      height:500px;
      padding-bottom: 0px;
  }

    .right{
       padding-right: 35px;
       padding-left: 35px;
      font-weight: bolder;
       flex-basis: 50%; 
      background-color: rgba(212, 237, 209, 0.39);
  }

  .right div{
      padding:5px;

  }

  p strong{
     font-size: 30px;
  }
</style>