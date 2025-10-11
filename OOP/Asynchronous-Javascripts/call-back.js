
//Mechanism 1 : Call back Function
//Call back function just handles async function this way: "call me when your done with your async task"


//an asynchronous code block caused by timer, executed independtly of other code block in the program
//Call back in action
function asyncFunction(callBackFunc){
    //an async function that carries out like an async task like fetching data from API
    setTimeout(()=>{
         console.log("asyncFunction has been completed --- data fetched");
         callBackFunc();
    }, 2000)
}

function callBackFunc(){
    //a function that must be executed after the async operation
    console.log("execute me after async function is completed -- display Data");
}

asyncFunction(callBackFunc);

//synchronous code that get executed , regardless of async functions but in an orderly manner
console.log("display image on webpage");
console.log("display texts on webpage");


//The flaws of CallBack -- CALL BACK HELL
/* so if lots of call back are to be executed one after another , we get a call back hell */

//call back hell in action
function callbackHellAsyncFunction(callBackHellFunc1){
    setTimeout(()=>{
        console.log("callback hell asyncFunction has started--- data fetched");
        callBackHellFunc1(callBackHellFunc2); // when done with the first async function call the next
   }, 5000)
}

function callBackHellFunc1(callBackHellFunc2){
    setTimeout(()=>{
         console.log("unencrypt data");
         callBackHellFunc2(callBackHellFunc3);
    }, 7000);
}

function callBackHellFunc2(callBackHellFunc3){
    setTimeout(()=>{
         console.log("Process data");
         callBackHellFunc3(callBackHellFinishFunc); // call 3 after executing 2
    }, 3000);
}

function callBackHellFunc3(callBackHellFinishFunc){
    setTimeout(()=>{
         console.log("display data");
         callBackHellFinishFunc();
    }, 500);
}

function callBackHellFinishFunc(){
    console.log("done with Data fetching and displaying");
}

//Demonstartion of call back hell, 
// passing a call back(callBackHellFunc-n) within a call back(()=>{where the callBackHell-n stays})
// to a call a call back(the call back that get passed into callBackHellFunc-n that is within a call back) and repeat
//NB: purposely made the explanation confusing to see hoe confusing the demonstraton is
callbackHellAsyncFunction(()=>{
    callBackHellFunc1(()=>{
        callBackHellFunc2(()=>{
            callBackHellFunc3(()=>{
                callBackHellFinishFunc();
            })
        })
    })
});

//AVOIDED CALL BACK HELL, BY MISTAKE
// callbackHellAsyncFunction(callBackHellFunc1);