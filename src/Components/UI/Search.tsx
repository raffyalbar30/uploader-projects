
import { IoIosSearch } from "react-icons/io";
  type propsState ={
    setgetInputs: React.Dispatch<React.SetStateAction<string>>;
    handleclick : ()=> void
  }


const Search: React.FC<propsState> = ({setgetInputs, handleclick}) => {
    return (
        <div className="flex justify-center ">
           <div className="relative w-full">
           <input type="text" 
             onChange={(e) => setgetInputs(e.target.value)}
            className=" rounded-md py-2 w-full placeholder:px-4" placeholder="searching..."/>
            <button onClick={handleclick} className="absolute top-2 end-1 cursor-pointer px-2 ">
            <IoIosSearch className="text-2xl" />
            </button>
           </div>
        </div>
    );
}

export default Search;
