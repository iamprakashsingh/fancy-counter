import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({type,setCount}){
    const handler = () => {
        setCount((prev)=>{
            if(type === "minus"){
                return prev-1;
            }else{
                return prev+1;
            }
            
        });
    };
    return (
      <button className="count-btn" onClick={handler}>
        {type === "minus" ? <MinusIcon className="count-btn-icon" /> :<PlusIcon className="count-btn-icon" />}
          
      </button>
    );
}