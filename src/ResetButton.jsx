import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({setCount}) {
    const handler = (event) => {
        setCount(0);
        event.currentTarget.blur();//this we did to remove the focus from the button after clicking it
    }
  return (
    <button className="reset-btn">
        <ResetIcon className="reset-btn-icon" onClick={handler}/>
    </button>
  )
}
