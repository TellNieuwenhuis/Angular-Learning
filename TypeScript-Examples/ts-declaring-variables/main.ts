function doSomething(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
    console.log("Finally: " + i); //!even though it is giving a compilation error here it will still generate the correct javascript code and execute it.
}                                  //!this error is because in typeScript the variable i is compiled to the nerest block of code not the function when useing let.

doSomething();