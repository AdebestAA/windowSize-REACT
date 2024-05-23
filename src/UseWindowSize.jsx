import { useEffect, useState } from "react"


const UseWindowSize = ()=>{
const [WindowSize,setWindowSize]= useState({
   width:window.innerWidth,
   height:window.innerHeight
    
})

const WindowSizeFunction = ()=>{
    setWindowSize({
   width:window.innerWidth,
   height:window.innerHeight
})


}

useEffect(()=>{
window.addEventListener("resize",WindowSizeFunction)
},[])

return WindowSize
}
export default UseWindowSize