import React from "react";

export const useMousePointer = () =>{
    const [position,setPosition] = React.useState({x:0,y:0});

    React.useEffect(()=>{
        const handleMuseMove =(e)=>{
            setPosition({x:e.clientX,y:e.clientY});
        }
      window.addEventListener('mousemove',handleMuseMove);
      return ()=> window.removeEventListener('mousemove',handleMuseMove);
    },[])

    return position;
}