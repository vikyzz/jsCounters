let num = parseInt(document.getElementById("ans").value)
if(num === 0)
{
    document.getElementById("dec").disabled=true
}


const increment = document.getElementById("inc").addEventListener("click",incfun) //event listner for increment
const decrement = document.getElementById("dec").addEventListener("click",decfun) //event listner for decrement


function incfun()
{
    num = parseInt(document.getElementById("ans").value)
    if(num>=0)
    document.getElementById("dec").disabled=false
    if(num >= 10){
        document.getElementById("inc").disabled=true
       
    }
    if(num < 10)
    num+=1
    document.getElementById("ans").value = num
    return
    
}
function decfun()
{
    num = parseInt(document.getElementById("ans").value)
    if(num<10)
    {
        document.getElementById("inc").disabled=false
    }
    
    if(num <= 0)
    {
        
        document.getElementById("dec").disabled=true
    }
    if(num > 0)
    num-=1
    document.getElementById("ans").value = num
    return
}
