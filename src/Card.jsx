import { useState } from "react";
import Count from "./Count";
import CountButtons from "./ButtonContainer";
import Heading from "./Heading";
import ResetButton from "./ResetButton";


export default function Card() {
    const [count,setCount] = useState(0);
    const locked = count===5;
  return (
    <div className={`card ${locked?'card-limit':""}`}>
        <Heading locked={locked}/>
        <Count number= {count} />
        <ResetButton setCount={setCount}/>
        <CountButtons setCount={setCount} locked={locked}/>
        
    </div>
  )
}
