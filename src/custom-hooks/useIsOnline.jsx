import React from "react";

export const useIsOnline = () =>{
   const [online,setOnline] = React.useState(window.navigator.onLine);

   React.useEffect(()=>{
    window.addEventListener('online',()=>{
        setOnline(true);
    })
    window.addEventListener('offline',()=>{
        setOnline(false);
    })

    return ()=>{
        window.removeEventListener('offline');
        window.removeEventListener('online');
    }
   },[])
  
   return online;
}