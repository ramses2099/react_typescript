import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () =>{
        if (userContext){
          userContext.setUser({
            name: 'John Doe',
            email: 'john.doe@example.com',  
           });
        }
    };
    const handleLogout = () => {
        if (userContext){
            userContext.setUser(null); 
        }  
    };
    return (<>
          <div className="flex justify-center p-5">
              <div>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleLogin} >Login</button>
              </div>
              <div>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleLogout}>Logout</button>
              </div>       
          </div>
          <div className="flex justify-center">
              User Name is {userContext.user?.name}
          </div>
          <div className="flex justify-center">
              User Email is {userContext.user?.email}
          </div>
          </>
        )
}

export default User