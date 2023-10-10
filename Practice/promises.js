 new Promise((resolve,reject) => {
 let error = false;
    if(!error){
        console.log()
        resolve({username:"Akshat",age:16},"Async 1 resolved");}
        else{
            reject("ERROR: Failed to resolve");

        }

    }

).
then( function(user){
 console.log(user)
 return user["age"]

})
.then( function(age){
    console.log(age);
   }
   )
.catch( function(error){

    console.log(`${error}`)
})
.finally( function(){
 console.log("the promise is either rsolved or rejected")
})