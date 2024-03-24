//display content in calc-screen
const displayContent=(content)=>{
    calcScreen.value +=content
}
//clear content
const clearAllContent=()=>{
    calcScreen.value=""
    calcScreen.placeholder="0"
}
//show result
const showResult=()=>{
    try {
        calcScreen.value=eval(calcScreen.value)

    } catch (error) {
        calcScreen.value=""
        calcScreen.placeholder ="ERROR!"
        
    }
}
//delete element 
const removeLast=()=>{
    calcScreen.value=calcScreen.value.slice(0,-1)
}