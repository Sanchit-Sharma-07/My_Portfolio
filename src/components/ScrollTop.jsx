import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop(){

const[top,setTop]=useState(false);

useEffect(()=>{

const scroll=()=>{

setTop(window.scrollY>500);

};

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

return(

<button

className={`scroll-top ${top?"show":""}`}

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

>

<FaArrowUp/>

</button>

);

}