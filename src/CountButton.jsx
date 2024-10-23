import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";


export default function CountButton({type,setCount,locked}){
    
    const handler = (event) => {
        setCount((prev)=>{
            if(type === "minus" && prev>=0){
                return (prev==0)?0: prev-1;
            }else{
                return prev+1;
            }
            
        });

        event.currentTarget.blur();//this we did to remove the focus from the button after clicking it
    };
    return (
      <button className="count-btn" onClick={handler} disabled={locked}>
        {type === "minus" ? <MinusIcon className="count-btn-icon" /> :<PlusIcon className="count-btn-icon" />}
          
      </button>
    );
}