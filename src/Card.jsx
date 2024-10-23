//i have learnt prop dealing also which can be used to pass data from parent to child component
//so in as we are passing all the props to ButtonContainer and through it to CountButton
//we can use prop drilling here.
import { useState, useEffect } from "react";
import Count from "./Count";
import CountButtons from "./ButtonContainer";
import Heading from "./Heading";
import ResetButton from "./ResetButton";

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = count === 5;

    

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") { 
                count<5?setCount(count+1):setCount(5); 
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown); 
        };
    }, [count]); 

    return (
        <div className={`card ${locked ? 'card-limit' : ""}`}>
            <Heading locked={locked} />
            <Count number={count} />
            <ResetButton setCount={setCount} />
            <CountButtons setCount={setCount} locked={locked} />
        </div>
    );
}
