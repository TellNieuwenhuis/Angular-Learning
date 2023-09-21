function doSomething() {
    for (var i = 0; i < 10; i++) { //!Notice how the java is changed to var from let. 
        console.log(i);
    }
    console.log("Finally: " + i);
}
doSomething();
