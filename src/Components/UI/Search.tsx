import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return (
        <div className="flex justify-center ">
           <div className="relative w-full">
           <input type="text"  className="rounded-md py-2 w-full placeholder:px-4" placeholder="searching..."/>
            <button className="absolute top-2 end-1 cursor-pointer px-2 ">
            <IoIosSearch className="text-2xl" />
            </button>
           </div>
        </div>
    );
}

export default Search;
