import Cards from '../../Components/UI/Crads';
  
  const Cardsmain = () => {
    return (
        <div className='border border-slate-600 mt-8'>
             <div className='grid grid-cols-4 p-4'>
                <Cards />
             </div> 
        </div>
    );
  }
  
  export default Cardsmain;
  