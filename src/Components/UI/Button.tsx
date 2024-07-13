import { ReactNode } from "react";

type button = {
    children : ReactNode;
}
const Button = (props: button) => {
    return (
        <button 
        className="w-full bg-gray-700 text-xl py-1 rounded-lg cursor-pointer"
        type="submit"
        >{props.children}</button> 
    );
}

export default Button;
