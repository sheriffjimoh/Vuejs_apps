<template>


     <div class="datas">
    

        <section class="modal-section"  v-if="IsActive" >
                <div class="modal">
                    <div class="modal-top">
                       <h1>Login in to Your Account</h1>
                       <div class="close">
                        <button @click="FadeOut()"><span>x</span></button>    
                       </div>
                      
                       
                    </div>
                    
                        <div class="alert">
                          <span :class="alertClass">{{message}}</span>    
                         </div>
                        
                     <div class="modal-body">
                        
                         <form  @submit.prevent="submit" >
                              <div>
                                 <input type="email" v-model="email" placeholder="Enter You Email">
                             </div>
                              <div>
                                 <input type="password" v-model="password" placeholder="Enter Password">
                             </div>
                              <div>
                                 <input type="submit" name="" id=""  value="Login">
                             </div>
                         </form>
                    </div>
                     <div class="modal-footer">

                    </div>
            
                </div>
        </section>

          <div class="user_card" v-if="Issignedin == true">
              <span>User ID :{{userID}}</span>
              <span>Email :{{email}}</span>
              <button @click="logout()" >Logout</button>
          </div>

        <div class="modal-launch">
         <button @click="FadeIn()" v-if="Issignedin==false">Launch Sign in modal</button>
            
        </div>

        
        
    </div>
</template>

<script>

import firebase from '../utilities/firebase';
export default {
    

     data(){
                return{
                    title: 'Login Page',
                    IsActive:false,
                    message: "",
                    Issignedin:false,
                    alertClass : "",
                    email: "",
                    password: "",
                    userID :  "",
                   authuser :{},
                }
     },
     methods:{
                FadeOut(){
                    return this.IsActive =false;
                        },

                FadeIn(){
                    return this.IsActive=true;
                        },

                submit(){
                    this.alertClass ="";
                    this.message = "";
                    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                            .then(() => {
                                // Signed in
                                this.alertClass = "alert_success";
                                this.message = 'signed in successful, please wait, Loading.....';
                                this.Issignedin= true;
                                this.IsActive= false;

                                // console.log(userCredential.user);
                            })
                            .catch((error) => {
                                // var errorCode = error.code;
                                var errorMessage = error.message;
                                this.message = errorMessage;
                                this.alertClass = "alert_error";
                                console.log(errorMessage);
                            });

                },
                logout(){

                }
          },


  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.authuser = user;
            this.userID = user.uid;
            this.email = user.email;
            this.Issignedin = true;
            this.IsActive = false;
            console.log(this.authuser);
            console.log(this.Issignedin);
       
          } else {
            // No user is signed in.
            this.Issignedin =false;
            console.log('no user');
             this.IsActive = true;
          }
      });
  }
}
</script>


<style scoped>


.active{
  display: block;
}

.inactive{
  display: none;
}

.datas{
    width: 100%;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
}

.modal-section{
      display: flex;
      justify-content: center;
      width:100%;
      height: 100%;
      position: fixed;
      top: 0px;
     opacity: 2;
      background-color: rgb(204, 189, 189);
      transition: 1s;
      transition-delay: 1ms;
  }

.modal{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      position: absolute;
      top:10%;
      bottom:0;
      width:620px ;
      height: 420px;
      background-color:#fff;
      opacity: 1;
      
  }

.modal  .modal-top{
       display: flex;
       flex-direction: row;
       box-shadow:0px 2px 0px 0px lightgrey;
       justify-content: center;
       line-height: 10px;
  }

  .modal  .modal-top h1{
      flex-basis: 70%;
      padding-left: 8px;
      font-size: 20px;
      padding-top: 15px;
     
 }

  .modal  .modal-top .close{
      flex-basis: 30%;
      justify-content: right;
      text-align: right;
      padding-right: 10px;
      font-size:20px;
       padding-top: 25px;
      
 }
 
  .modal  .modal-top .close button{
      font-size:20px;
      background-color: #fff;
      border: none;
      font-weight: 800;
      border-radius: 50%;
  }

    .modal  .modal-top .close button:hover{
        border: none !important;
    }


   .modal .modal-body{
       display: flex;
       justify-content: center;
       padding-top: 20px;
       
    }
     .modal .modal-body form{   
         width: 450px;
        justify-content: center;
            text-align: center;
            padding-top: 30px;
     }
      .modal .modal-body form div{
          padding-bottom:20px;
      }
    .modal .modal-body form div input[type=email],.modal .modal-body form div input[type=password]{
        padding:10px;
        width: 100%;
        border-radius: 0%;
    }

      .modal .modal-body form div input[type=submit] {
        padding:10px  50px  10px 50px;
       cursor: pointer;
        background-color: black;
        color: #fff;
        font-weight: 800;
     
    }
 .modal-launch{
  padding-top: 13rem;
 }
    .modal-launch button{
         padding:10px  50px  10px 50px;
       cursor: pointer;
        background-color: black;
        color: #fff;
        font-weight: 800;
    }

    .alert{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        text-align: center;
        padding-top: 10px;
    }

.alert  .alert_success{
    background-color: rgb(10, 82, 10);
    color: white;
    font-weight: bolder;
    width: 600px;
    padding: 10px;

    }

    .alert  .alert_error{
    background-color: firebrick;
    color: white;
    font-weight: bolder;
    width: 600px;
    padding: 10px;
     
     }

     .user_card{
         display: flex;
         flex-direction: column;
         justify-content: center;
         margin-top: 40px;
         box-shadow: 3px 3px 6px 6px #ccc;
         padding: 60px;
   }

   .user_card span{
       /* border-bottom:1px solid grey; */
       padding-top: 20px;;
   }

   .user_card button{
         padding:10px  50px  10px 50px;
       cursor: pointer;
        background-color: black;
        color: #fff;
        font-weight: 800;
       margin-top: 20px;;
   }
</style>