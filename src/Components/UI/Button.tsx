import { ReactNode } from "react";

type button = {
    className : string;
    children : ReactNode;
}
const Button = ({className, children} : button) => {
    return (
        <button 
        className={`w-[120px] bg-purple-600  ${className} py-1 rounded-full cursor-pointer`}
        type="submit"
        >{children}</button> 
    );
}

export default Button;
