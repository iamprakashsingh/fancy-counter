import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({type,setCount,locked}){
    const handler = () => {
        setCount((prev)=>{
            if(type === "minus" && prev>=0){
                return (prev==0)?0: prev-1;
            }else{
                return prev+1;
            }
            
        });
    };
    return (
      <button className="count-btn" onClick={handler} disabled={locked}>
        {type === "minus" ? <MinusIcon className="count-btn-icon" /> :<PlusIcon className="count-btn-icon" />}
          
      </button>
    );
}