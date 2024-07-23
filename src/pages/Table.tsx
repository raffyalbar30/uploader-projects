import { useQuery, keepPreviousData} from '@tanstack/react-query'
import {  useState } from 'react';
import Search from '../Components/UI/Search';





const Table = () => {
    const [isData, setisData] = useState(1);
    const [getInputs, setgetInputs] = useState<string>("");
    const [search, setsearch] = useState<userTable>([]);
    const api = `https://reqres.in/api/users?page=` + isData;

    interface userTable {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    interface userSearch {
        email : string;
      }


    const { data } = useQuery({
        queryKey: ['table', isData],
        queryFn: async () => {
            const data = await fetch(api)
             const Response = await data.json();
             return Response.data;
        },
        placeholderData: keepPreviousData,
    })

    const Searching = () => {
            const inputset = getInputs.trim();
            const filter = data.find((ress: userSearch) => ress.email == inputset);
            setsearch(filter)
    }
      console.log(getInputs);
      console.log(search);
    return (

        <>
          
 <Search setgetInputs={setgetInputs} handleclick={Searching}/>
<div className="relative overflow-x-auto mt-8">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Avatar
                </th>
                <th scope="col" className="px-6 py-3">
                     Email
                </th>
                <th scope="col" className="px-6 py-3">
                    FristName
                </th>
                <th scope="col" className="px-6 py-3">
                    LastName
                </th>
            </tr>
        </thead>
           {getInputs == "" ? (
              data?.map((item : userTable )=> (
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={item.avatar} alt="" className='rounded-full w-[50px]' />
                    </th>
                    <td className="px-6 py-4">
                        {item.email}
                    </td>
                    <td className="px-6 py-4">
                         {item.first_name}
                    </td>
                    <td className="px-6 py-4">
                         {item.last_name}
                    </td>
                </tr>
            </tbody>
             ))
           ) : (
            <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={search.avatar} alt="" className='rounded-full w-[50px]' />
                </th>
                <td className="px-6 py-4">
                {search.email}
                </td>
                <td className="px-6 py-4">
                {search.first_name}
                </td>
                <td className="px-6 py-4">
                {search.last_name}
                </td>
            </tr>
        </tbody>
           )}
    </table>
</div>

   <div className='flex justify-center mt-8'>
    <div className='flex gap-x-2'>
        <button className='py-2 bg-black text-white shadow-md px-4 rounded-sm' onClick={()=> setisData(next => next + 1)}>next</button>
        <button className='py-2 bg-black text-white shadow-md px-4 rounded-sm' onClick={()=> setisData(prev => prev - 1)}>prev</button>
    </div>
   </div>

        </>
    );
}

export default Table;
