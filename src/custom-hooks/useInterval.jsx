import { useEffect } from "react";

export const useInterval = (fn,time)=>{
    
    useEffect(()=>{
       const timer = setInterval(fn(),time*1000);

       return  ()=>{
        clearInterval(timer);
       }

    },[fn,time])

    return;
}