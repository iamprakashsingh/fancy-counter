import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import Heading from "./Heading";
import ResetButton from "./ResetButton";


export default function Card() {
    const [count,setCount] = useState(0);
  return (
    <div className="card">
        <Heading/>
        <Count number= {count} />
        <ResetButton setCount={setCount}/>
        <CountButtons setCount={setCount}/>
        
    </div>
  )
}
