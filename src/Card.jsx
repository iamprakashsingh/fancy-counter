import Count from "./Count";
import CountButtons from "./CountButtons";
import Heading from "./Heading";
import ResetButton from "./ResetButton";


export default function Card() {
  return (
    <div>
        <Heading/>
        <Count/>
        <ResetButton/>
        <CountButtons/>
        
    </div>
  )
}
