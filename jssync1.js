
function login(cb){
    setTimeout(()=>{
      console.log('login end')   
      cb();
    },2000)
 
}
function getData(cb){
   setTimeout(()=>{
      console.log('getData end')   
      cb();
    },8000)  
}
function calculateData(cb){
    setTimeout(()=>{
      console.log('calculateData end')   
      cb();
    },3000)  
}
function sendSms(cb){
    setTimeout(()=>{
      console.log('sendSms end')   
      cb();
    },1000)   
}
function logout(){
    setTimeout(()=>{
      console.log('logout end')   
    },1000)  
}

login(()=>{
         getData(()=>{
                calculateData(()=>{
                      sendSms(()=>{
                               logout();
                      });
                });
         });
});




console.log('call other application')