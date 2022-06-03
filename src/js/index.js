/** Example 01 starting */
function consoleLogBasedOnCondition(index, times){

    /** Adding base condition and also stop the condition using return. */
    if(index === times){
        console.log("we got output.");
        return;
    }
    console.log('index value is ',index);

    /** Calling same method until condition satisfied. */
    consoleLogBasedOnCondition(index+1,times)
}

consoleLogBasedOnCondition(1, 5);
/** Example 01 Ending */

