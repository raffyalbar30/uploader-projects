import { Outlet,  Navigate } from 'react-router-dom'


// private provider 
const Validate = () => {
      const gettoken = localStorage.getItem("token") == null  ? false : true;
      return (
         <>
            { gettoken ? <Outlet/> : <Navigate to={"/auth/Login"} /> }
         </>
      );
}

export default Validate;
